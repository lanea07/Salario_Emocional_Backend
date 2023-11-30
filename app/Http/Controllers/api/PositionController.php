<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\PositionService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePositionRequest;
use App\Models\Position;
use Illuminate\Http\JsonResponse;

class PositionController extends Controller
{

    private PositionService $positionService;

    public function __construct(PositionService $positionService)
    {
        $this->positionService = $positionService;
        $this->middleware('checkroles:Admin');
    }

    public function index(): JsonResponse
    {
        $this->authorize('index', auth()->user());
        return response()->json($this->positionService->getAllPositions(), 200);
    }

    public function store(CreatePositionRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', Position::class);
            return response()->json($this->positionService->savePosition($request->validated()), 201);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede guardar el cargo porque ya existe un cargo con el mismo nombre registrado.'], 400);
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

    public function show(Position $position): JsonResponse
    {
        return response()->json($this->positionService->getPositionByID($position));
    }

    public function update(CreatePositionRequest $request, Position $position): JsonResponse
    {
        try {
            $this->authorize('update', $position);
            return response()->json($this->positionService->updatePosition($request->validated(), $position), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede actualizar el cargo porque ya existe un cargo con el mismo nombre registrado.'], 400);
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
        // broadcast(new DirectorioUpdate($position));
    }

    public function destroy(Position $position): JsonResponse
    {
        try {
            $this->authorize('destroy', $position);
            $this->positionService->deletePosition($position);
            return response()->json(['message' => 'Posición eliminada'], 200);
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }
}
