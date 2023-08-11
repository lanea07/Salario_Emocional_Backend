<?php

namespace App\Policies;

use App\Models\Role;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class RolePolicy
{

    public function index(User $user, User $model)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function store(User $user)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function update(User $user, Role $role)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }


    public function delete(User $user, Role $role)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }
}
