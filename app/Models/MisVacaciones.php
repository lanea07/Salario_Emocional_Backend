<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;

class MisVacaciones extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Mis Vacaciones');
    }

    public function canCreate(array $requestedBenefitData)
    {
        return;
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        return;
    }
}
