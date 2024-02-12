<?php

namespace App\Policies;

use App\Models\BenefitUser;
use App\Models\User;

class BenefitUserPolicy
{

    public function show(User $user, BenefitUser $benefitUser)
    {
        return $user->id === $benefitUser->user->leader || $user->id === $benefitUser->user->id || $user->isAdmin();
    }

    public function store(User $user)
    {
        return auth('sanctum')->check();
    }

    public function update(User $user, BenefitUser $benefitUser)
    {
        return auth('sanctum')->check() && $user->id === $benefitUser->user->id;
    }

    public function destroy(User $user, BenefitUser $benefitUser)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function decideBenefitUser(User $user, BenefitUser $benefitUser)
    {
        return auth('sanctum')->check() && in_array($user->id, $benefitUser->user->ancestors->pluck('id')->toArray());
    }
}
