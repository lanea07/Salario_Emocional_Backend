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
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'min:6', 'confirmed'],
        ]);
        if (!Hash::check($validated['current_password'], auth()->user()->password)) {
            throw ValidationException::withMessages([
                'message' => 'La contraseña actual es incorrecta'
            ]);
        }
        if (Hash::check($validated['password'], auth()->user()->password)) {
            throw ValidationException::withMessages([
                'message' => 'La nueva contraseña no puede ser igual a la anterior'
            ]);
        }

        auth()->user()->update([
            'password' => Hash::make($validated['password']),
            'requirePassChange' => false
        ]);
    }
}
