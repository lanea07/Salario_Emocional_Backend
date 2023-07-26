<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(): JsonResponse
    {
        request()->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required'
        ]);

        try {
            $user = User::where('email', request()->email)->first();
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 500);
        }


        if (!$user || !Hash::check(request()->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => 'The provided credentials are incorrect.'
            ]);
        }

        return response()->json([
            'token' => $user->createToken(request()->device_name)->plainTextToken,
            'can' => $user->roles,
            'id' => $user->id,
            'user' => $user
        ]);
    }

    public function logout(): JsonResponse
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logged out'
        ]);
    }

    public function validateToken(): JsonResponse
    {
        return response()->json(
            ['valid' => auth('sanctum')->check()]
        );
    }

    public function validateAdmin(): JsonResponse
    {
        return response()->json(['admin' => auth('sanctum')->user()->isAdmin()]);
    }
}
