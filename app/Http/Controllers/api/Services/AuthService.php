<?php

namespace App\Http\Controllers\api\Services;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthService
{

    public function validateUserLogin(string $email, string $password): User | null
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

    public function loginAs(User $currentUser, int $loginAsUser): JsonResponse
    {
        if (!$currentUser->isAdmin()) {
            throw new \Exception('No tienes permisos para realizar esta acción');
        }
        $user = User::find($loginAsUser);
        return response()->json(
            [
                'token' => $user->createToken(request()->device_name, ['*'], now()->addDay())->plainTextToken,
                'id' => $user->id,
                'user' => $user->only('name', 'email', 'id'),
                'simulated' => true,
            ],
            200
        );
    }
}
