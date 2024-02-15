<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\AuthService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    private AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function login(): JsonResponse
    {
        request()->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required'
        ]);

        try {
            $user = $this->authService->validateUserLogin(request()->email, request()->password);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 500);
        }

        if (!$user || !Hash::check(request()->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => 'Credenciales incorrectas.'
            ]);
        }

        return response()->json(
            [
                'token' => $user->createToken(request()->device_name, ['*'], now()->addDay())->plainTextToken,
                'id' => $user->id,
                'user' => $user->only('name', 'email', 'id'),
            ],
            200
        );
    }

    public function logout(): JsonResponse
    {
        $this->authService->logoutUser();
        return response()->json(['message' => 'Logged out'], 200);
    }

    public function validateToken(): JsonResponse
    {
        return response()->json(['valid' => auth('sanctum')->check()], 200);
    }

    public function validateAdmin(): JsonResponse
    {
        return response()->json(['admin' => auth('sanctum')->user()->isAdmin()], 200);
    }

    public function validateRequirePassChange(): JsonResponse
    {
        return response()->json(auth()->user()->requirePassChange());
    }

    public function passwordChange(Request $request): JsonResponse
    {
        $this->authService->validatePasswordChange($request);
        return response()->json(['message' => 'success'], 200);
    }

    public function loginAs(Request $request): JsonResponse
    {
        $currentUser = auth()->user();
        $loginAsUserID = $request->user_id;
        try {
            return $this->authService->loginAs($currentUser, $loginAsUserID);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 401);
        }
    }

}
