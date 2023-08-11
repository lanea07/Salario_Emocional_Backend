<?php

namespace App\Http\Controllers\api\Services;

use App\Models\Role;
use Illuminate\Database\Eloquent\Collection;

class RoleService
{

    public function getAllRoles(): Collection
    {
        return Role::all();
    }

    public function saveRole(array $roleData): Role
    {
        return Role::create($roleData);
    }

    public function getRoleById(Role $role): Role
    {
        return $role;
    }

    public function updateRole(array $roleData, Role $role): Role
    {
        $role->update($roleData);
        return $role;
    }

    public function deleteRole(Role $role): void
    {
        $role->delete();
    }
}
