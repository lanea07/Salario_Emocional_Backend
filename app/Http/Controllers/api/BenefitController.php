<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\BenefitService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitRequest;
use App\Models\Benefit;
use Illuminate\Http\JsonResponse;

class BenefitController extends Controller
{

    private BenefitService $benefitService;

    public function __construct(BenefitService $benefitService)
    {
        $this->benefitService = $benefitService;
        $this->middleware('checkroles:Admin', ['except' => ['index', 'show']]);
    }

    public function index(): JsonResponse
    {
        return response()->json($this->benefitService->getAllBenefits(), 200);
    }

    public function store(CreateBenefitRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', Benefit::class);
            return response()->json($this->benefitService->saveBenefit($request->validated()), 201);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede guardar el beneficio porque ya existe un beneficio con el mismo nombre registrado.'], 400);
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


    public function show(Benefit $benefit): JsonResponse
    {
        return response()->json($this->benefitService->getBenefitByID($benefit), 200);
    }

    public function update(CreateBenefitRequest $request, Benefit $benefit): JsonResponse
    {
        try {
            $this->authorize('update', $benefit);
            return response()->json($this->benefitService->updateBenefit($request->validated(), $benefit), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede actualizar el beneficio porque ya existe un beneficio con el mismo nombre registrado.'], 400);
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
        // broadcast(new DirectorioUpdate($benefit));
    }

    public function destroy(Benefit $benefit): JsonResponse
    {
        try {
            $this->authorize('destroy', $benefit);
            $this->benefitService->deleteBenefit($benefit);
            return response()->json(['message' => 'Beneficio eliminado'], 200);
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }
}
