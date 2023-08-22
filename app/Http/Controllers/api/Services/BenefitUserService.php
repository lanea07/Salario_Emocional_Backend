<?php

namespace App\Http\Controllers\api\Services;

use App\Mail\BenefitUserCreated;
use App\Models\Benefit;
use App\Models\BenefitDetail;
use App\Models\BenefitUser;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Mail;

class BenefitUserService
{

    public function getAllBenefitUser(int $userId, int $year): Collection
    {
        if (auth()->user()->isAdmin()) {
            return User::with(
                [
                    'benefit_user' => function ($q) use ($year) {
                        $q->whereYear('benefit_begin_time', $year);
                        $q->orderBy('benefit_begin_time');
                    },
                    'benefit_user.benefits',
                    'benefit_user.benefit_detail'
                ]
            )->get();
        }
        return User::with(
            [
                'benefit_user' => function ($q) use ($year) {
                    $q->whereYear('benefit_begin_time', $year);
                    $q->orderBy('benefit_begin_time');
                },
                'benefit_user.benefits',
                'benefit_user.benefit_detail'
            ]
        )->where(function ($q) use ($userId) {
            $q->where('leader', $userId)
                ->orWhere('id', $userId);
        })->get();
    }

    public function saveBenefitUser(array $benefitUserData): BenefitUser
    {
        $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);
        $bancoHoras = new Collection();
        $miViernes = new Collection();

        switch ($requestedBenefit->name) {
            case 'Mi Cumpleaños':
                $this->canSaveMiCumpleanos($benefitUserData);
                break;

            case 'Mi Banco de Horas':
                $this->canSaveBancoHoras($benefitUserData, $requestedBenefit);
                break;

            case 'Mi Horario Flexible':
                $this->canSaveHorarioFlexible($benefitUserData);
                break;

            case 'Mi Viernes':
                $this->canSaveMiViernes($benefitUserData);
                break;
        }

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

        // $benefitUserData = BenefitUser::with(['user', 'benefits', 'benefit_detail'])->find(5);
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
                'benefit_user.benefit_detail'
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
            case 'Mi Cumpleaños':
                $this->canUpdateMiCumpleanos($benefitUserData);
                break;

            case 'Mi Banco de Horas':
                $this->canUpdateBancoHoras($benefitUserData, $benefitUser, $requestedBenefit);
                break;

            case 'Mi Horario Flexible':
                $this->canUpdateHorarioFlexible($benefitUserData, $benefitUser);
                break;

            case 'Mi Viernes':
                $this->canUpdateMiViernes($benefitUserData, $benefitUser);
                break;
        }

        $benefitUser->update($benefitUserData);
        return $benefitUser;
    }

    public function deleteBenefitUser(BenefitUser $benefitUser): void
    {
        $benefitUser->delete();
    }



    // Methods for validating specific benefits

    /**
     * @param array $benefitData Array of values to be saved as new User Benefit
     */
    private function canSaveMiCumpleanos(array $benefitData): void
    {
        $isBirthdayClaimed = BenefitUser::where(function ($q) use ($benefitData) {
            $q->where('benefit_id', $benefitData['benefit_id']);
            $q->where('user_id', '<>', $benefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitData['benefit_begin_time'])));
        })->get();
        if (!$isBirthdayClaimed->isEmpty()) {
            throw new Exception("El beneficio que está intentando registrar ya fue utilizado este año. No se puede usar más de una vez.", 1);
        }
    }

    /**
     * @param array $benefitData Array of values to be saved as new User Benefit
     */
    private function canUpdateMiCumpleanos(array $benefitData): void
    {
        $isBirthdayClaimed = BenefitUser::where(function ($q) use ($benefitData) {
            $q->where('benefit_id', $benefitData['benefit_id']);
            $q->where('user_id', '<>', $benefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitData['benefit_begin_time'])));
        })->get();
        if (!$isBirthdayClaimed->isEmpty()) {
            throw new Exception("El beneficio que está intentando actualizar ya fue utilizado este año. No se puede usar más de una vez.", 1);
        }
    }

    /**
     * @param array $benefitData Array of values to be saved as new User Benefit
     * @param Benefit $benefit Instance of the benefit used to validate if $benefitData can be saved
     */
    private function canSaveBancoHoras(array $benefitData, Benefit $benefit): void
    {
        $requestedTime = BenefitDetail::find($benefitData['benefit_detail_id'])->time_hours;
        $total_time_hours = BenefitUser::with(['benefit_detail'])
            ->where(function ($q) use ($benefitData, $benefit) {
            $q->where('user_id', '=', $benefitData['user_id']);
            $q->where('benefit_id', '=', $benefit->id);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitData['benefit_begin_time'])));
        })->get()->pluck('benefit_detail.time_hours')->sum();
        if ($total_time_hours >= 16) {
            throw new Exception("El beneficio que estás intentando registrar ya tiene utilizado todas las horas disponibles.", 1);
        }
        if ($total_time_hours + $requestedTime > 16) {
            throw new Exception("El beneficio que estás intentando registrar supera las horas autorizadas.", 1);
        }
    }

    /**
     * @param array $benefitData Array of values to be saved as new User Benefit
     * @param BenefitUser $benefitUser Instance of the benefit used to validate if $benefitData can be saved
     * @param Benefit $requestedBenefit Instance of the benefit requested to update
     */
    private function canUpdateBancoHoras(array $benefitData, BenefitUser $benefitUser, Benefit $requestedBenefit): void
    {
        $actualTime = BenefitDetail::find($benefitUser['benefit_detail_id'])->time_hours;
        $requestedTime = BenefitDetail::find($benefitData['benefit_detail_id'])->time_hours;
        $total_time_hours = BenefitUser::with(['benefit_detail'])
            ->where(function ($q) use ($benefitData, $requestedBenefit) {
                $q->where('user_id', $benefitData['user_id']);
                $q->where('benefit_id', $requestedBenefit->id);
            })
            ->get()->pluck('benefit_detail.time_hours')->sum();
        if (($total_time_hours - $actualTime) + $requestedTime > 16) {
            throw new Exception("El beneficio que estás intentando actualizar supera las horas disponibles.", 1);
        }
    }

    /**
     * @param array $benefitData Array of values to be saved as new User Benefit
     */
    private function canSaveHorarioFlexible(array $benefitData): void
    {
        $claimedSchedule = BenefitUser::where(function ($q) use ($benefitData) {
            $q->where('benefit_id', $benefitData['benefit_id']);
            $q->where('user_id', '<>', $benefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitData['benefit_begin_time'])));
        })->get();
        if (!$claimedSchedule->isEmpty()) {
            $claimedSchedule->each(function ($item, $key) use ($benefitData) {
                if ($this->date_quarter($benefitData['benefit_begin_time']) === $this->date_quarter($item->benefit_begin_time)) {
                    throw new Exception("Este beneficio ya está activo para este trimestre.", 1);
                }
            });
        }
    }

    /**
     * @param array $benefitData Array of values to be saved as new User Benefit
     */
    private function canUpdateHorarioFlexible(array $benefitData, BenefitUser $benefitUser): void
    {
        $claimedSchedule = BenefitUser::where(function ($q) use ($benefitData, $benefitUser) {
            $q->where('id', '<>', $benefitUser->id);
            $q->where('user_id', '<>', $benefitData['user_id']);
            $q->where('benefit_id', $benefitData['benefit_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitData['benefit_begin_time'])));
        })->get();
        if (!$claimedSchedule->isEmpty()) {
            $claimedSchedule->each(function ($item, $key) use ($benefitData) {
                if ($this->date_quarter($benefitData['benefit_begin_time']) === $this->date_quarter($item->benefit_begin_time)) {
                    throw new Exception("Este beneficio ya está activo para este trimestre.", 1);
                }
            });
        }
    }

    /**
     * @param array $benefitData Array of values to be saved as new User Benefit
     */
    private function canSaveMiViernes(array $benefitData): void
    {
        $claimedFriday = BenefitUser::where(function ($q) use ($benefitData) {
            $q->where('benefit_id', $benefitData['benefit_id']);
            $q->where('user_id', $benefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitData['benefit_begin_time'])));
            $q->whereMonth('benefit_begin_time', date("n", strtotime($benefitData['benefit_begin_time'])));
        })->get();
        if (!$claimedFriday->isEmpty()) {
            throw new Exception("El beneficio que está intentando registrar ya fue utilizado en este mes.", 1);
        }
    }

    /**
     * @param array $benefitData Array of values to be saved as new User Benefit
     */
    private function canUpdateMiViernes(array $benefitData): void
    {
        $claimedFriday = BenefitUser::where(function ($q) use ($benefitData) {
            $q->where('benefit_id', $benefitData['benefit_id']);
            $q->where('user_id', $benefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitData['benefit_begin_time'])));
            $q->whereMonth('benefit_begin_time', date("n", strtotime($benefitData['benefit_begin_time'])));
        })->get();
        if (!$claimedFriday->isEmpty()) {
            throw new Exception("El beneficio que está intentando actualizar ya fue utilizado en este mes.", 1);
        }
    }

    /**
     * Returns the quarter of the year for the input date
     * 
     * @param string $date
     * @return int 
     */
    function date_quarter(string $date): int
    {
        $month = date('n', strtotime($date));

        if ($month <= 3) return 1;
        if ($month <= 6) return 2;
        if ($month <= 9) return 3;
        return 4;
    }
}
