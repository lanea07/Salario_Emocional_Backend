<?php

namespace App\Policies;

use App\Models\BenefitDetail;
use App\Models\User;

class BenefitDetailPolicy
{

    public function index(User $user, BenefitDetail $benefitDetail)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function store(User $user)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function update(User $user, BenefitDetail $benefitDetail)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function destroy(User $user, BenefitDetail $benefitDetail)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }
}
