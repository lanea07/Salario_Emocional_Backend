<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;

class PermisoEspecial extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Mi Viernes');
    }

    public function canCreate(array $requestedBenefitData): bool
    {
        return true;
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        return true;
    }
}
