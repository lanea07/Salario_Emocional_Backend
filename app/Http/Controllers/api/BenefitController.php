<?php

namespace App\Http\Controllers\api;

use App\Services\BenefitService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitRequest;
use App\Models\Benefit;
use Illuminate\Http\JsonResponse;
use Throwable;

class BenefitController extends Controller
{

    public function __construct(private BenefitService $benefitService)
    {
        $this->middleware('checkroles:Admin', ['except' => ['index', 'indexAvailable', 'show']]);
    }

    /**
     * Return all benefits
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json($this->benefitService->getAllBenefits(), 200);
    }

    /**
     * Store a new benefit
     * 
     * @param CreateBenefitRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateBenefitRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', Benefit::class);
            return response()->json($this->benefitService->saveBenefit($request->validated()), 201);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);        
        }
    }

    /**
     * Return a benefit by id
     * 
     * @param Benefit $benefit
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Benefit $benefit): JsonResponse
    {
        return response()->json($this->benefitService->getBenefitByID($benefit), 200);
    }

    /**
     * Update a benefit
     * 
     * @param CreateBenefitRequest $request
     * @param Benefit $benefit
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateBenefitRequest $request, Benefit $benefit): JsonResponse
    {
        try {
            $this->authorize('update', $benefit);
            return response()->json($this->benefitService->updateBenefit($request->validated(), $benefit), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            return response()->json(['message' => $th->getMessage()], 400);        
        }
    }

    /**
     * Delete a benefit
     * 
     * @param Benefit $
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Benefit $benefit): JsonResponse
    {
        try {
            $this->authorize('destroy', $benefit);
            $this->benefitService->deleteBenefit($benefit);
            return response()->json(['message' => 'Beneficio eliminado'], 200);
        } catch (Throwable $th) {
            return response()->json($th, 500);
        }
    }

    /**
     * Return all valid benefits
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexAvailable(): JsonResponse
    {
        return response()->json($this->benefitService->getAllEnabledBenefits(), 200);
    }
}
