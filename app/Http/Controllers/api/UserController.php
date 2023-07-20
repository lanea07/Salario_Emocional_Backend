<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
use App\Models\Position;
use App\Models\Role;
use App\Models\User;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('checkroles:Admin', ['except' => ['index', 'show']]);
    }

    public function index()
    {
        return User::with(['leader', 'subordinates', 'positions', 'roles'])->get();
    }


    public function create()
    {
        // Not used vía API
    }


    public function store(CreateUserRequest $request)
    {
        $validated = $request->validated();

        $rolesToAsign = array_filter($validated['rolesFormGroup'], function ($role) {
            return $role === true;
        });
        $rolesToAsign = array_keys($rolesToAsign);
        $rolesToAsign = Role::whereIn('name', $rolesToAsign)->get();

        if ($validated['subordinates']) {
            $newSubordinates = $validated['subordinates'];
            $user = User::create($validated);
            User::whereIn('id', $newSubordinates)->update(['leader' => $user->id]);
        } else {
            $user = User::create($validated);
        }

        $user->roles()->sync($rolesToAsign);
        return response($user, 201);
    }


    public function show(User $user)
    {
        return $user->with(['leader', 'subordinates', 'positions', 'roles'])->where('id', $user->id)->get();
    }


    public function edit(User $user)
    {
        // Not used vía API
    }


    public function update(CreateUserRequest $request, User $user)
    {
        $this->authorize('update', $user);
        $validated = $request->validated();

        $rolesToAsign = array_filter($validated['rolesFormGroup'], function ($role) {
            return $role === true;
        });
        $rolesToAsign = array_keys($rolesToAsign);
        $rolesToAsign = Role::whereIn('name', $rolesToAsign)->get();

        // $positionsToAsign = array_filter($validated['position_id'], function ($role) {
        //     return $role === true;
        // });
        // $positionsToAsign = array_keys($positionsToAsign);
        $positionsToAsign = Position::where('id', $validated['position_id'])->first();


        if ($validated['subordinates']) {
            $newSubordinates = $validated['subordinates'];
            $user->update($validated);
            User::whereIn('leader', $user->id)->update(['leader' => null]);
            User::whereIn('id', $newSubordinates)->update(['leader' => $user->id]);
        } else {
            User::where('leader', '=', $user->id)->update(['leader' => null]);
            $user->update($validated);
        }

        $user->roles()->sync($rolesToAsign);
        $user->update(['position_id' => $positionsToAsign->id]);
        // $user->update($request->validated());
        // broadcast(new DirectorioUpdate($user));
        return response($user, 200);
    }


    public function destroy(User $user)
    {
        try {
            $this->authorize('destroy', $user);
            $user->delete();
            return response(['msg' => 'Usuario eliminado'], 200);
        } catch (\Throwable $th) {
            return response($th, 500);
        }
    }
}
