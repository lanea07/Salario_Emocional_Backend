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

    /**
     * Log in a user
     * 
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * Log out a user
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(): JsonResponse
    {
        $this->authService->logoutUser();
        return response()->json(['message' => 'Logged out']);
    }

    /**
     * Validate if the token is valid
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateToken(): JsonResponse
    {
        return response()->json(['valid' => auth('sanctum')->check()]);
    }

    /**
     * Validate if the user is admin
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateAdmin(): JsonResponse
    {
        return response()->json(['admin' => auth('sanctum')->user()->isAdmin()]);
    }

    /**
     * Validate if the user needs to change the password
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateRequirePassChange(): JsonResponse
    {
        return response()->json(auth()->user()->requirePassChange());
    }

    /**
     * Change the password of the user
     * 
     * @param Request $request
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function passwordChange(Request $request): JsonResponse
    {
        $this->authService->validatePasswordChange($request);
        return response()->json(['message' => 'success']);
    }

    /**
     * Log in as another user
     * 
     * @param Request $request
     * 
     * @return \Illuminate\Http\JsonResponse
     */
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
