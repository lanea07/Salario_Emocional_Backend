<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;
use Exception;

class TrabajoHibrido extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Trabajo Híbrido');
    }

    public function canCreate(array $requestedBenefitData)
    {
        $claimed = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', '=', $requestedBenefitData['user_id']);
        })->get();
        if (!$claimed->isEmpty()) {
            throw new Exception("Ya tienes registrada una modalidad de trabajo híbrido, puedes editarla si lo deseas.", 1);
        }
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        return;
    }
}
