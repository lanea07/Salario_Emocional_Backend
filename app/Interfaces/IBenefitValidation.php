<?php

namespace App\Interfaces;

use App\Models\BenefitUser;

interface IBenefitValidation
{
    public function canCreate(array $requestedBenefitData);
    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null);
}
