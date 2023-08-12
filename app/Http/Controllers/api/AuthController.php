<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\AuthService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

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

        $user = $this->authService->validateUserLogin(request()->email, request()->password);

        return response()->json(
            [
                'token' => $user->createToken(request()->device_name)->plainTextToken,
                'can' => $user->roles,
                'id' => $user->id,
                'user' => $user
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
}
