<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\AdminService;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function __construct(private AdminService $adminService)
    {
        $this->middleware('checkroles:Admin');
    }

    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllBenefitUser(Request $request): JsonResponse
    {
        try {
            return response()->json($this->adminService->getAllBenefits($request));
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function getAllGroupedBenefits(Request $request): JsonResponse
    {
        try {
            return response()->json($this->adminService->getAllGroupedBenefits($request));
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }
}
