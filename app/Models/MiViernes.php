<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;
use Carbon\Carbon;
use Exception;

class MiViernes extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Mi Viernes');
    }

    public function canCreate(array $requestedBenefitData)
    {
        $claimedFriday = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', $requestedBenefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->whereMonth('benefit_begin_time', date("n", strtotime($requestedBenefitData['benefit_begin_time'])));
        })->get();
        if (!$claimedFriday->isEmpty()) {
            throw new Exception("El beneficio que está intentando registrar ya fue utilizado en este mes.", 1);
        }
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        $claimedFriday = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', $requestedBenefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->whereMonth('benefit_begin_time', date("n", strtotime($requestedBenefitData['benefit_begin_time'])));
        })->get();
        if (!$claimedFriday->isEmpty()) {
            $existingFridayMonth = Carbon::parse($claimedFriday->first()->benefit_begin_time)->month;
            $requestedFridayMonth = Carbon::parse(strtotime($requestedBenefitData['benefit_begin_time']))->month;
            if ($existingFridayMonth === $requestedFridayMonth) {
                throw new Exception("El beneficio que está intentando actualizar ya fue utilizado en este mes.", 1);
            }
        }
    }
}
