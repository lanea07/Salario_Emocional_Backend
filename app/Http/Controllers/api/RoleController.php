<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\RoleService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateRoleRequest;
use App\Models\Role;
use Illuminate\Http\JsonResponse;

class RoleController extends Controller
{

    private RoleService $roleService;

    public function __construct(RoleService $roleService)
    {
        $this->roleService = $roleService;
        $this->middleware('checkroles:Admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $this->authorize('index', auth()->user());
        return response()->json($this->roleService->getAllRoles(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreateRoleRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateRoleRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', Role::class);
            return response()->json($role = $this->roleService->saveRole($request->validated()), 201);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede guardar el rol porque ya existe un rol con el mismo nombre registrado.'], 400);
                    break;
                case 4025:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                case 1:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                default:
                    return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
                    break;
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Role $role): JsonResponse
    {
        return response()->json($this->roleService->getRoleById($role), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\CreateRoleRequest  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateRoleRequest $request, Role $role): JsonResponse
    {
        try {
            $this->authorize('update', $role);
            return response()->json($role = $this->roleService->updateRole($request->validated(), $role), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede actualizar el rol porque ya existe un rol con el mismo nombre registrado.'], 400);
                    break;
                case 4025:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                case 1:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                default:
                    return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
                    break;
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Role $role): JsonResponse
    {
        try {
            $this->authorize('destroy', $role);
            $this->roleService->deleteRole($role);
            return response()->json(['message' => 'Rol eliminado'], 200);
        } catch (\Throwable $th) {
            return response($th, 500);
        }
    }
}
