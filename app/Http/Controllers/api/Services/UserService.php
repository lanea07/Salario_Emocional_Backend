<?php

namespace App\Http\Controllers\api\Services;

use App\Mail\NewUserCreated;
use App\Models\Position;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserService
{

    public function getAllUsers(): Collection
    {
        return User::with(['leader', 'subordinates', 'positions', 'roles'])->orderBy('name')->get();
    }

    public function saveUser(array $userData): User
    {
        if (!$userData['password']) {
            $password = Str::password(10);
            $userData['password'] = $password;
        }

        $rolesToAsign = array_filter($userData['rolesFormGroup'], function ($role) {
            return $role === true;
        });
        $rolesToAsign = array_keys($rolesToAsign);
        $rolesToAsign = Role::whereIn('name', $rolesToAsign)->get();

        $userData['requirePassChange'] = true;

        if ($userData['subordinates']) {
            $newSubordinates = $userData['subordinates'];
            $user = User::create($userData);
            User::whereIn('id', $newSubordinates)->update(['leader' => $user->id]);
        } else {
            $user = User::create($userData);
        }

        $user->roles()->sync($rolesToAsign);

        $data = [
            $user,
            $password
        ];
        Mail::to($user->email)->queue(new NewUserCreated($data));

        return $user;
    }

    public function getUserById(User $user): Collection
    {
        return $user->with(['leader', 'subordinates', 'positions', 'roles'])->where('id', $user->id)->get();
    }

    public function updateUser(array $userData, User $user): User
    {
        if (!$userData['password']) {
            $userData['password'] = $user->password;
        }

        $rolesToAsign = array_filter($userData['rolesFormGroup'], function ($role) {
            return $role === true;
        });
        $rolesToAsign = array_keys($rolesToAsign);
        $rolesToAsign = Role::whereIn('name', $rolesToAsign)->get();

        $positionsToAsign = Position::where('id', $userData['position_id'])->first();

        if ($userData['subordinates']) {
            $newSubordinates = $userData['subordinates'];
            $user->update($userData);
            User::where('leader', $user->id)->update(['leader' => null]);
            User::whereIn('id', $newSubordinates)->update(['leader' => $user->id]);
        } else {
            User::where('leader', '=', $user->id)->update(['leader' => null]);
            $user->update($userData);
        }

        $user->roles()->sync($rolesToAsign);
        $user->update(['position_id' => $positionsToAsign->id]);
        return $user;
    }

    public function deleteUser(User $user): void
    {
        $user->delete();
    }
}
