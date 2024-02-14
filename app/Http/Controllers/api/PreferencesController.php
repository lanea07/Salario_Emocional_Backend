<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\PreferencesService;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PreferencesController extends Controller
{

    private PreferencesService $preferencesService;

    public function __construct(PreferencesService $preferencesService)
    {
        $this->preferencesService = $preferencesService;
    }

    /**
     * Returns all available preferences for User model
     * 
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json($this->preferencesService->getAllAvailablePreferences(), 200);
    }

    /**
     * Returns all preferences for the authenticated user
     * 
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request): JsonResponse
    {
        $user = User::find($request->id);
        return response()->json($this->preferencesService->userPreferences($user), 200);
    }

    public function store(Request $request): JsonResponse
    {
        $user = User::find($request->id);
        $user->setSettings($request->all());
        return response()->json(['message' => 'Preferences actualizadas'], 200);
    }
}
