<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\UserService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;


class UserController extends Controller
{

    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
        $this->middleware('checkroles:Admin', ['except' => ['index', 'show']]);
    }

    public function index(): JsonResponse
    {
        return response()->json($this->userService->getAllUsers(), 200);
    }

    public function store(CreateUserRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', User::class);
            return response()->json($this->userService->saveUser($request->validated()), 201);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede guardar el usuario porque ya existe un usuario con el mismo correo registrado.'], 400);
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

    public function show(User $user): JsonResponse
    {
        return response()->json($user->with(['positions', 'roles'])->tree()->get()->toTree(), 200);
        //return response()->json($this->userService->getUserById($user), 200);
    }

    public function update(CreateUserRequest $request, User $user): JsonResponse
    {
        try {
            $this->authorize('update', $user);
            return response()->json($this->userService->updateUser($request->validated(), $user), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede actualizar el usuario porque ya existe un usuario con el mismo correo registrado.'], 400);
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
        // broadcast(new DirectorioUpdate($user));
    }

    public function destroy(User $user): JsonResponse
    {
        try {
            $this->authorize('destroy', $user);
            $this->userService->deleteUser($user);
            return response()->json(['msg' => 'Usuario eliminado'], 200);
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }
}
