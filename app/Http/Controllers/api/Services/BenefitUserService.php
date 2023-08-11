<?php

namespace App\Http\Controllers\api\Services;

use App\Mail\BenefitUserCreated;
use App\Models\Benefit;
use App\Models\BenefitDetail;
use App\Models\BenefitUser;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\App;
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
        // Validate if specific benefit Mi Banco de Horas is lower than 16
        $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);
        if ($requestedBenefit->name === 'Mi Banco de Horas') {
            $requestedTime = BenefitDetail::find($benefitUserData['benefit_detail_id'])->time_hours;
            $total_time_hours = BenefitUser::with(['benefit_detail'])
                ->where(function ($q) use ($benefitUserData, $requestedBenefit) {
                    $q->where('user_id', $benefitUserData['user_id']);
                    $q->where('benefit_id', $requestedBenefit->id);
                })
                ->get()->pluck('benefit_detail.time_hours')->sum();
            if ($total_time_hours >= 16) {
                throw new Exception("El beneficio que estás intentando registrar ya tiene utilizado todas las horas disponibles.", 1);
            }
            if ($total_time_hours + $requestedTime > 16) {
                throw new Exception("El beneficio que estás intentando registrar supera las horas autorizadas.", 1);
            }
        }

        $benefitUserData = BenefitUser::create($benefitUserData);
        $benefitUserData = BenefitUser::with(['user', 'benefits', 'benefit_detail'])->find($benefitUserData->id);
        // $benefitUserData = BenefitUser::with(['user', 'benefits', 'benefit_detail'])->find(5);
        if (App::environment('production')) {
            Mail::to($benefitUserData->user->email)->queue(new BenefitUserCreated($benefitUserData));
        }
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
        // Validate if specific benefit Mi Banco de Horas is lower than 16
        $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);
        if ($requestedBenefit->name === 'Mi Banco de Horas') {
            $actualTime = BenefitDetail::find($benefitUser['benefit_detail_id'])->time_hours;
            $requestedTime = BenefitDetail::find($benefitUserData['benefit_detail_id'])->time_hours;
            $total_time_hours = BenefitUser::with(['benefit_detail'])
                ->where(function ($q) use ($benefitUserData, $requestedBenefit) {
                    $q->where('user_id', $benefitUserData['user_id']);
                    $q->where('benefit_id', $requestedBenefit->id);
                })
                ->get()->pluck('benefit_detail.time_hours')->sum();
            if ($total_time_hours - $actualTime + $requestedTime > 16) {
                throw new Exception("El beneficio que estás intentando registrar ya tiene utilizado todas las horas disponibles.", 1);
            }
        }
        $benefitUser->update($benefitUserData);
        return $benefitUser;
    }

    public function deleteBenefitUser(BenefitUser $benefitUser): void
    {
        $benefitUser->delete();
    }
}
