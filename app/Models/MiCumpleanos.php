<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;
use Exception;

class MiCumpleanos extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Mi Cumpleaños');
    }

    public function canCreate(array $requestedBenefitData)
    {
        $isBirthdayClaimed = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', '=', $requestedBenefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
        })->get();
        if (!$isBirthdayClaimed->isEmpty()) {
            throw new Exception("El beneficio que está intentando registrar ya fue utilizado este año. No se puede usar más de una vez.", 1);
        }
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        $isBirthdayClaimed = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', '=', $requestedBenefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->is_approved();
        })->get();
        if (!$isBirthdayClaimed->isEmpty()) {
            throw new Exception("El beneficio que está intentando actualizar ya fue utilizado el año que indicaste. No se puede usar más de una vez.", 1);
        }
    }
}
