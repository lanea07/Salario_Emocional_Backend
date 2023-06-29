<?php

namespace App\Policies;

use App\Models\Position;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PositionPolicy
{

    public function index(User $user, User $model)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }

    public function update(User $user, Position $position)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }


    public function destroy(User $user, Position $position)
    {
        return $user->isAdmin() && auth('sanctum')->check();
    }
}
