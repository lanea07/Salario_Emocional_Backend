<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{

    public function index(User $user, User $model)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function store(User $user)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function update(User $user, User $model)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }


    public function destroy(User $user, User $model)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }
}
