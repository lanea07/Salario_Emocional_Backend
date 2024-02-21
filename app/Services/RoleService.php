<?php

namespace App\Services;

use App\Models\Role;
use Illuminate\Database\Eloquent\Collection;

class RoleService
{

    /**
     * Get all roles
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function getAllRoles(): Collection
    {
        return Role::all();
    }

    /**
     * Save a new role
     *
     * @param  array  $roleData
     * @return Role
     */
    public function saveRole(array $roleData): Role
    {
        return Role::create($roleData);
    }

    /**
     * Get a role by ID
     *
     * @param  Role $role
     * @return Role
     */
    public function getRoleById(Role $role): Role
    {
        return $role;
    }

    /**
     * Update a role
     *
     * @param  array  $roleData
     * @param  Role $role
     * @return Role
     */
    public function updateRole(array $roleData, Role $role): Role
    {
        $role->update($roleData);
        return $role;
    }

    /**
     * Delete a role
     *
     * @param  Role $role
     * @return void
     */
    public function deleteRole(Role $role): void
    {
        throw new \Exception('No se puede eliminar un rol');
    }
}
