<?php

namespace App\Http\Controllers\api\Services;

use App\Enums\BenefitDecision;
use App\Mail\BenefitDecision as MailBenefitDecision;
use App\Mail\BenefitUserCreated;
use App\Mail\BenefitUserExcelExport;
use App\Mail\NotifyNewBenefitRequestToLeader;
use App\Models\Benefit;
use App\Models\BenefitUser;
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

    /**
     * Returns all the benefits of a user
     * 
     * @param int $userId
     * @param int $year
     * 
     * @return Collection
     */
    public function getAllBenefitUser(int $userId, int $year): Collection
    {
        return User::with(
            [
                'benefit_user' => function ($q) use ($year) {
                    $q->is_approved();
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

    /**
     * Saves a new benefit for a user
     * 
     * @param array $benefitUserData
     * 
     * @return BenefitUser
     */
    public function saveBenefitUser(array $benefitUserData): BenefitUser
    {
        $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);
        $bancoHoras = new Collection();
        $miViernes = new Collection();
        $className = str_replace([' ', 'ñ', 'Ñ'], ['', 'n', 'N'], $requestedBenefit->name);
        $className = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $className);
        $className = '\\App\\Models\\' . $className;
        $requestedBenefit = (new $className)->first();
        $requestedBenefit->canCreate($benefitUserData);
        $benefitUserData = BenefitUser::create($benefitUserData);
        $benefitUserData = $benefitUserData->load(['user', 'benefits', 'benefit_detail', 'user.leader_user']);

        if ($requestedBenefit->name === 'Mi Banco de Horas') {
            $bancoHoras = BenefitUser::with(['benefit_detail'])->where(
                function ($q) use ($benefitUserData) {
                    $q->where('user_id', $benefitUserData->user_id);
                    $q->where('benefit_id', $benefitUserData->benefit_id);
                    $q->where('id', '<>', $benefitUserData->id);
                    $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitUserData['benefit_begin_time'])));
                    $q->is_Approved();
                }
            )
            ->orderBy('benefit_begin_time')
            ->get();
        }
        if ($requestedBenefit->name === 'Mi Viernes') {
            $miViernes = BenefitUser::where(
                function ($q) use ($benefitUserData) {
                    $q->where('user_id', $benefitUserData->user_id);
                    $q->where('benefit_id', $benefitUserData->benefit_id);
                    $q->where('id', '<>', $benefitUserData->id);
                    $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitUserData['benefit_begin_time'])));
                    $q->is_Approved();
                }
            )
            ->orderBy('benefit_begin_time')
            ->get();
        }

        $data = [
            $benefitUserData,
            $bancoHoras,
            $miViernes
        ];

        if ($benefitUserData->user->leader_user !== null) {
            $leader = $benefitUserData->user->leader_user;
            if ($leader->settings()->get('Auto Aprobar Beneficios de mis Colaboradores') === 'Sí') {
                $this->decideBenefitUser('approve', $benefitUserData);
            } else {
                Mail::to($benefitUserData->user->leader_user->email)->queue(new NotifyNewBenefitRequestToLeader($data));
                Mail::to($benefitUserData->user->email)->queue(new BenefitUserCreated($data));
            }
        } else {
            $benefitUserData->is_approved = BenefitDecision::APPROVED->value;
            $benefitUserData->approved_at = Carbon::now();
            $benefitUserData->approved_by = auth()->user()->id;
            $benefitUserData->save();
            Mail::to($benefitUserData->user->email)->queue(new MailBenefitDecision($benefitUserData));
        }
        return $benefitUserData;
    }

    /**
     * Returns a benefit by its ID
     * 
     * @param BenefitUser $benefitUser
     * 
     * @return Collection
     */
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

    /**
     * Updates a benefit for a user
     * 
     * @param array $benefitUserData
     * @param BenefitUser $benefitUser
     * 
     * @return BenefitUser
     */
    public function updateBenefitUser(array $benefitUserData, BenefitUser $benefitUser): BenefitUser
    {
        $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);
        $className = str_replace([' ', 'ñ', 'Ñ'], ['', 'n', 'N'], $requestedBenefit->name);
        $className = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $className);
        $className = '\\App\\Models\\' . $className;
        $requestedBenefit = (new $className)->first();
        $requestedBenefit->canUpdate($benefitUserData, $benefitUser);
        $benefitUser->update($benefitUserData);
        return $benefitUser;
    }

    /**
     * Deletes a benefit for a user
     * 
     * @param BenefitUser $benefitUser
     * 
     * @return void
     */
    public function deleteBenefitUser(BenefitUser $benefitUser): void
    {
        $benefitUser->delete();
    }

    /**
     * Returns all the benefits of a user that are not approved
     * 
     * @param int $userId
     * 
     * @return Collection
     */
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

    /**
     * Returns all the benefits of users that are not approved
     * 
     * @param Request $request
     * 
     * @return Collection
     */
    public function getAllBenefitCollaboratorsNonApproved(Request $request): Collection
    {
        $user = $request->user();
        return BenefitUser::withWhereHas(
            'user',
            function ($q) use ($user) {
                $q->with('descendantsAndSelf');
            },
        )
            ->with(['benefits', 'benefit_detail'])
            ->is_pending()
            ->get();
    }

    /**
     * Returns all the benefits of user descendants and self
     * 
     * @param Request $request
     * 
     * @return Collection
     */
    public function getAllBenefitCollaborators(Request $request)
    {
        $user = $request->user();
        return User::where('id', '=', $user->id)
        ->with(
            [
                'descendantsAndSelf.benefit_user' => function ($q) use ($request) {
                    $q->whereYear('benefit_begin_time', $request->year);
                    $q->is_approved();
                },
                'descendantsAndSelf.benefit_user.benefits',
                'descendantsAndSelf.benefit_user.user',
                'descendantsAndSelf.benefit_user.benefit_detail',
            ]
        )
        ->oldest('name')
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

    /**
     * Decides if a benefit is approved or rejected
     * 
     * @param string $decision
     * @param BenefitUser $benefitUser
     * 
     * @return BenefitUser
     */
    public function decideBenefitUser(
        string $decision,
        BenefitUser $benefitUser
    ) {
        switch ($decision) {
            case 'approve':
                $benefitUser->is_approved = BenefitDecision::APPROVED->value;
                break;
            case 'reject':
                $benefitUser->is_approved = BenefitDecision::DENIED->value;
                break;
            default:
                throw new Exception("No se pudo reconocer la acción. Intente más tarde", 1);
                break;
        }
        $benefitUser->approved_at = Carbon::now();
        $benefitUser->approved_by = auth()->user()->id;
        $benefitUser->save();
        Mail::to($benefitUser->user->email)->queue(new MailBenefitDecision($benefitUser));
        return $benefitUser;
    }

    /**
     * Exports the benefits of a user and descendants to an Excel file and mails it
     * 
     * @param Request $request
     * 
     * @return void
     */
    public function exportBenefits(Request $request)
    {
        $year = $request->years;
        $user_id = auth()->user()->id;
        $data = ['year' => $year, 'user_id' => $user_id];
        Mail::to(auth()->user()->email)->queue(new BenefitUserExcelExport($data));
    }
}
