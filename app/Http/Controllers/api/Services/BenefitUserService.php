<?php

namespace App\Http\Controllers\api\Services;

use App\Mail\BenefitUserCreated;
use App\Models\Benefit;
use App\Models\BenefitUser;
use App\Models\DiaDeLaFamilia;
use App\Models\MiBancoDeHoras;
use App\Models\MiCumpleanos;
use App\Models\MiHorarioFlexible;
use App\Models\MisVacaciones;
use App\Models\MiViernes;
use App\Models\TrabajoHibrido;
use App\Models\User;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Spatie\IcalendarGenerator\Components\Calendar;
use Spatie\IcalendarGenerator\Components\Event;
use Spatie\IcalendarGenerator\Properties\TextProperty;

class BenefitUserService
{

    // TODO: Implement logic to approve or deny benefits
    public function getAllBenefitUser(int $userId, int $year): Collection
    {
        return User::with(
            [
                'benefit_user' => function ($q) use ($year) {
                    $q->where('is_approved', true);
                    $q->whereYear('benefit_begin_time', $year);
                    $q->orderBy('benefit_begin_time');
                },
                'benefit_user.benefits',
                'benefit_user.benefit_detail',
                'benefit_user.user.dependency'
            ]
        )
        ->where('id', $userId)
        ->get();
    }

    public function saveBenefitUser(array $benefitUserData): BenefitUser
    {
        $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);
        $bancoHoras = new Collection();
        $miViernes = new Collection();

        switch ($requestedBenefit->name) {
            case 'Día de la Familia':
                $requestedBenefit = DiaDeLaFamilia::find($requestedBenefit->toArray())->first();
                break;

            case 'Mi Banco de Horas':
                $requestedBenefit = MiBancoDeHoras::find($requestedBenefit->toArray())->first();
                break;

            case 'Mi Cumpleaños':
                $requestedBenefit = MiCumpleanos::find($requestedBenefit->toArray())->first();
                break;

            case 'Mi Horario Flexible':
                $requestedBenefit = MiHorarioFlexible::find($requestedBenefit->toArray())->first();
                break;

            case 'Mi Viernes':
                $requestedBenefit = MiViernes::find($requestedBenefit->toArray())->first();
                break;

            case 'Mis Vacaciones':
                $requestedBenefit = MisVacaciones::find($requestedBenefit->toArray())->first();
                break;

            case 'Trabajo Híbrido':
                $requestedBenefit = TrabajoHibrido::find($requestedBenefit->toArray())->first();
                break;

            default:
                throw new Exception("El beneficio que está intentando registrar no existe o no está disponible.", 1);
                break;
        }

        $requestedBenefit->canCreate($benefitUserData);

        $benefitUserData = BenefitUser::create($benefitUserData);
        $benefitUserData = BenefitUser::with(['user', 'benefits', 'benefit_detail'])->find($benefitUserData->id);

        if ($requestedBenefit->name === 'Mi Banco de Horas') {
            $bancoHoras = BenefitUser::with(['benefit_detail'])->where(function ($q) use ($benefitUserData) {
                $q->where('user_id', $benefitUserData->user_id);
                $q->where('benefit_id', $benefitUserData->benefit_id);
                $q->where('id', '<>', $benefitUserData->id);
                $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitUserData['benefit_begin_time'])));
            })->orderBy('benefit_begin_time')->get();
        }
        if ($requestedBenefit->name === 'Mi Viernes') {
            $miViernes = BenefitUser::where(function ($q) use ($benefitUserData) {
                $q->where('user_id', $benefitUserData->user_id);
                $q->where('benefit_id', $benefitUserData->benefit_id);
                $q->where('id', '<>', $benefitUserData->id);
                $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitUserData['benefit_begin_time'])));
            })->orderBy('benefit_begin_time')->get();
        }

        $data = [
            $benefitUserData,
            $bancoHoras,
            $miViernes
        ];

        Mail::to($benefitUserData->user->email)->queue(new BenefitUserCreated($data));
        return $benefitUserData;
    }

    public function getBenefitUserByID(BenefitUser $benefitUser): Collection
    {
        return User::with(
            [
                'benefit_user' => function ($q) use ($benefitUser) {
                    $q->where('id', $benefitUser->id);
                    $q->orderBy('benefit_begin_time');
                },
                'benefit_user.benefits',
                'benefit_user.benefit_detail',
                'benefit_user.user.dependency'
            ]
        )->wherehas('benefit_user', function ($q) use ($benefitUser) {
            $q->where('id', '=', $benefitUser->id);
            $q->orderBy('benefit_begin_time');
        })->get();
    }

    public function updateBenefitUser(array $benefitUserData, BenefitUser $benefitUser): BenefitUser
    {
        $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);

        switch ($requestedBenefit->name) {
            case 'Día de la Familia':
                $requestedBenefit =  DiaDeLaFamilia::find($requestedBenefit->toArray())->first();
                break;

            case 'Mi Banco de Horas':
                $requestedBenefit =  MiBancoDeHoras::find($requestedBenefit->toArray())->first();
                break;

            case 'Mi Cumpleaños':
                $requestedBenefit =  MiCumpleanos::find($requestedBenefit->toArray())->first();
                break;

            case 'Mi Horario Flexible':
                $requestedBenefit =  MiHorarioFlexible::find($requestedBenefit->toArray())->first();
                break;

            case 'Mi Viernes':
                $requestedBenefit =  MiViernes::find($requestedBenefit->toArray())->first();
                break;

            case 'Mis Vacaciones':
                $requestedBenefit =  MisVacaciones::find($requestedBenefit->toArray())->first();
                break;

            case 'Trabajo Híbrido':
                $requestedBenefit =  TrabajoHibrido::find($requestedBenefit->toArray())->first();
                break;

            default:
                throw new Exception("El beneficio que está intentando registrar no existe o no está disponible.", 1);
                break;
        }

        $requestedBenefit->canUpdate($benefitUserData, $benefitUser);

        $benefitUser->update($benefitUserData);
        return $benefitUser;
    }

    public function deleteBenefitUser(BenefitUser $benefitUser): void
    {
        $benefitUser->delete();
    }

    public function getAllBenefitUserNonApproved(int $userId): Collection
    {
        return User::with(
            [
                'benefit_user' => function ($q) {
                    $q->where('is_approved', false);
                    $q->orderBy('benefit_begin_time');
                },
                'benefit_user.benefits',
                'benefit_user.benefit_detail',
                'benefit_user.user.dependency'
            ]
        )
            ->where('id', $userId)
            ->get();
    }

    public function getAllBenefitCollaboratorsNonApproved(Request $request): Collection
    {
        $user = $request->user();
        return BenefitUser::withWhereHas(
            'user',
            function ($q) use ($user) {
                $q->where('leader', '=', $user->id);
            },
        )
            ->with(['benefits', 'benefit_detail'])
            ->where('is_approved', false)
            ->get();
    }

    public function getAllBenefitCollaborators(Request $request): Collection
    {
        $user = $request->user();
        return BenefitUser::withWhereHas(
            'user',
            function ($q) use ($user) {
                $q->where('leader', '=', $user->id);
                $q->orWhere('id', '=', $user->id);
            },
        )
            ->with(['benefits', 'benefit_detail'])
            ->where('is_approved', true)
            ->get();
    }

    /**
     * Returns an *.ics file to be attached to the new benefit
     * 
     * @param BenefitUser $benefitUser
     * 
     * @return object
     */
    static function generateICS(BenefitUser $benefitUser)
    {
        $event = Calendar::create($benefitUser->user->email)->event([
            Event::create()
                ->name($benefitUser->benefits->name)
                ->createdAt(new DateTime(Carbon::now()))
                ->startsAt(new DateTime($benefitUser->benefit_begin_time, new DateTimeZone('America/Bogota')))
                ->endsAt(new DateTime($benefitUser->benefit_end_time, new DateTimeZone('America/Bogota')))
                ->appendProperty(
                    TextProperty::create('X-MICROSOFT-CDO-BUSYSTATUS', 'OOF')
                )
        ]);
        return $event->get();
    }
}
