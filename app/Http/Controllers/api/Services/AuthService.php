<?php

namespace App\Http\Controllers\api\Services;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthService
{

    public function validateUserLogin(string $email, string $password): User | JsonResponse
    {
        $user = User::where('email', $email)->first();
        return $user;
    }

    public function logoutUser(): void
    {
        auth()->user()->tokens()->delete();
    }

    public function validatePasswordChange(Request $request): void
    {
        if (!Hash::check($request->currentPassword, auth()->user()->password)) {
            throw ValidationException::withMessages([
                'message' => 'La contraseña actual es incorrecta'
            ]);
        }
        if (Hash::check($request->password, auth()->user()->password)) {
            throw ValidationException::withMessages([
                'message' => 'La nueva contraseña no puede ser igual a la anterior'
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
    }
}
