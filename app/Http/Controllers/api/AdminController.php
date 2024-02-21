<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\AdminService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function __construct(private AdminService $adminService)
    {
        $this->middleware('checkroles:Admin');
    }

    /**
     * Return all users benefits using the filters in the request
     * 
     * @param Request $request
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

    /**
     * Returns users benefits grouped by benefit
     * 
     * @param Request $request
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllGroupedBenefits(Request $request): JsonResponse
    {
        try {
            return response()->json($this->adminService->getAllGroupedBenefits($request));
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }
}
