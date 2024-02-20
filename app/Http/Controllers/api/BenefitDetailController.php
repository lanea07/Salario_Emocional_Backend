<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\BenefitDetailService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitDetailRequest;
use App\Models\BenefitDetail;
use Illuminate\Http\JsonResponse;

class BenefitDetailController extends Controller
{

    private BenefitDetailService $benefitDetailService;

    public function __construct(BenefitDetailService $benefitDetailService)
    {
        $this->benefitDetailService = $benefitDetailService;
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
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateBenefitDetailRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', BenefitDetail::class);
            return response()->json($this->benefitDetailService->saveBenefitDetail($request->validated()), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede guardar el detalle porque ya existe un detalle con el mismo nombre registrado.'], 400);
                    break;
                case 4025:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                case 1:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                default:
                    return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
                    break;
            }
        }
    }

    /**
     * Return a benefit detail by ID
     * 
     * @param BenefitDetail $benefitdetail
     * 
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
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateBenefitDetailRequest $request, BenefitDetail $benefitdetail): JsonResponse
    {
        try {
            $this->authorize('update', $benefitdetail);
            return response()->json($this->benefitDetailService->updateBenefitDetail($request->validated(), $benefitdetail), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede actualizar el detalle porque ya existe un detalle con el mismo nombre registrado.'], 400);
                    break;
                case 4025:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                case 1:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                default:
                    return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
                    break;
            }
        }
    }

    /**
     * Delete a benefit detail
     * 
     * @param BenefitDetail $benefitdetail
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(BenefitDetail $benefitdetail): JsonResponse
    {
        try {
            $this->authorize('destroy', $benefitdetail);
            $this->benefitDetailService->deleteBenefitDetail($benefitdetail);
            return response()->json(['message' => 'Detalle de Beneficio eliminado'], 200);
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }
}
