<?php

namespace App\Services;

use App\Mail\NewUserCreated;
use App\Models\Position;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserService
{

    /**
     * Return all users
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllUsers(): Collection
    {
        return User::with(['dependency', 'parent', 'positions', 'roles'])->orderBy('name')->get();
    }

    /**
     * Store a new user
     * 
     * @param array $userData
     * 
     * @return \App\Models\User
     */
    public function saveUser(array $userData): User
    {
        if (!$userData['password']) {
            $password = Str::password(10, true, true, false, false);
            $userData['password'] = $password;
        }

        $rolesToAsign = array_filter($userData['rolesFormGroup'], function ($role) {
            return $role === true;
        });
        $rolesToAsign = array_keys($rolesToAsign);
        $rolesToAsign = Role::whereIn('name', $rolesToAsign)->get();

        $userData['requirePassChange'] = true;

        $user = User::create($userData);

        $user->roles()->sync($rolesToAsign);

        $data = [
            $user,
            $password
        ];
        Mail::to($user->email)->queue(new NewUserCreated($data));

        return $user;
    }

    /**
     * Return a user by id
     * 
     * @param User $user
     * 
     * @return \App\Models\User
     */
    public function getUserById(User $user)
    {
        $users = User::with(['dependency', 'parent', 'positions', 'roles'])->treeOf($user, 1)->get();
        return $users->toTree();
    }

    /**
     * Update a user
     * 
     * @param array $userData
     * @param User $user
     * 
     * @return \App\Models\User
     */
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
        $user->update($userData);
        $user->roles()->sync($rolesToAsign);
        $user->update(['position_id' => $positionsToAsign->id]);
        return $user;
    }

    /**
     * Delete a user
     * 
     * @param User $user
     * 
     * @return void
     */
    public function deleteUser(User $user): void
    {
        throw new \Exception('No se puede eliminar un usuario');
    }
}