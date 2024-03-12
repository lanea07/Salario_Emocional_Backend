<?php

namespace App\Http\Controllers\api;

use App\Services\BenefitDetailService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitDetailRequest;
use App\Models\BenefitDetail;
use Illuminate\Http\JsonResponse;
use Throwable;

class BenefitDetailController extends Controller
{

    public function __construct(private BenefitDetailService $benefitDetailService)
    {
        $this->middleware('checkroles:Admin');
    }

    /**
     * Return all benefit details
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $this->authorize('index', auth()->user());
        return response()->json($this->benefitDetailService->getAllBenefitDetail(), 200);
    }

    /**
     * Store a new benefit detail
     * 
     * @param \App\Http\Requests\CreateBenefitDetailRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateBenefitDetailRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', BenefitDetail::class);
            return response()->json($this->benefitDetailService->saveBenefitDetail($request->validated()), 201);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);        
        }
    }

    /**
     * Return a benefit detail by ID
     * 
     * @param BenefitDetail $benefitdetail
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(BenefitDetail $benefitdetail): JsonResponse
    {
        return response()->json($this->benefitDetailService->getBenefitDetailByID($benefitdetail), 200);
    }

    /**
     * Update a benefit detail
     * 
     * @param \App\Http\Requests\CreateBenefitDetailRequest $request
     * @param BenefitDetail $benefitdetail
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateBenefitDetailRequest $request, BenefitDetail $benefitdetail): JsonResponse
    {
        try {
            $this->authorize('update', $benefitdetail);
            return response()->json($this->benefitDetailService->updateBenefitDetail($request->validated(), $benefitdetail), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            return response()->json(['message' => $th->getMessage()], 400);        
        }
    }

    /**
     * Delete a benefit detail
     * 
     * @param BenefitDetail $benefitdetail
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(BenefitDetail $benefitdetail): JsonResponse
    {
        try {
            $this->authorize('destroy', $benefitdetail);
            $this->benefitDetailService->deleteBenefitDetail($benefitdetail);
            return response()->json(['message' => 'Detalle de Beneficio eliminado'], 200);
        } catch (Throwable $th) {
            return response()->json($th, 500);
        }
    }

    /**
     * Return all benefit details in a datatable formmated response
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function datatable()
    {
        try {
            return response()->json($this->benefitDetailService->getDatatable(), 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
}
