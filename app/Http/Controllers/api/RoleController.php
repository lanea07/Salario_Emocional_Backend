<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateRoleRequest;
use App\Models\Role;

class RoleController extends Controller
{

    public function __construct()
    {
        $this->middleware('checkroles:Admin');
    }

    public function index()
    {
        $this->authorize('index', auth()->user());
        return Role::all();
    }


    public function store(CreateRoleRequest $request)
    {
        $newRole = $request->validated();
        $newRole = Role::create($newRole);
        return response($newRole, 201);
    }


    public function show(Role $role)
    {
        return $role;
    }


    public function update(Role $role, CreateRoleRequest $request)
    {
        $this->authorize('update', $role);
        $role->update($request->validated());
        // broadcast(new DirectorioUpdate($role));
        return response($role, 200);
    }


    public function destroy(Role $role)
    {
        try {
            $this->authorize('destroy', $role);
            $role->delete();
            return response(['msg' => 'Rol eliminado'], 200);
        } catch (\Throwable $th) {
            return response($th, 500);
        }
    }
}
