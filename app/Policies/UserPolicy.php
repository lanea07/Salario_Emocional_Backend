<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{

    public function index(User $user, User $model)
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
