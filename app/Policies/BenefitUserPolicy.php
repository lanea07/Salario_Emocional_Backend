<?php

namespace App\Policies;

use App\Models\BenefitUser;
use App\Models\User;

class BenefitUserPolicy
{

    public function show(User $user, BenefitUser $benefitUser)
    {
        return $user->isAdmin() || $user->id === $benefitUser->user->leader || $user->id === $benefitUser->user->id;
    }

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

    public function decideBenefitUser(User $user, BenefitUser $benefitUser)
    {
        return $user->id === $benefitUser->user->leader && auth('sanctum')->check();
    }
}
