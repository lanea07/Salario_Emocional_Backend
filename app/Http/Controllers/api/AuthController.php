<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
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

    public function validateRequirePassChange(): JsonResponse
    {
        return response()->json(auth()->user()->requirePassChange());
    }

    public function passwordChange(Request $request): JsonResponse
    {
        if (!Hash::check($request->currentPassword, auth()->user()->password)) {
            throw ValidationException::withMessages([
                'message' => 'La contraseña actual es incorrecta'
            ]);
        }
        if ($request->password !== $request->retypePassword) {
            throw ValidationException::withMessages([
                'message' => 'Las contraseñas no coinciden'
            ]);
        }
        $user = auth()->user();
        $user->password = $request->password;
        $user->requirePassChange = false;
        $user->save();
        return response()->json(['message' => 'success']);
    }
}
