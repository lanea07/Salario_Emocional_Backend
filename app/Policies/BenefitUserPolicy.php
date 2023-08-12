<?php

namespace App\Policies;

use App\Models\BenefitUser;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BenefitUserPolicy
{

    public function store(User $user)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function update(User $user, BenefitUser $benefitUser)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function destroy(User $user, BenefitUser $benefitUser)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }
}
