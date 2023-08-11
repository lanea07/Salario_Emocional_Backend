<?php

namespace App\Policies;

use App\Models\Benefit;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BenefitPolicy
{

    public function index(User $user, Benefit $benefit)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function store(User $user)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function update(User $user, Benefit $benefit)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }


    public function destroy(User $user, Benefit $benefit)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }
}
