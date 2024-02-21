<?php

namespace App\Http\Controllers\api;

use App\Services\PositionService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePositionRequest;
use App\Models\Position;
use Illuminate\Http\JsonResponse;
use Throwable;

class PositionController extends Controller
{

    public function __construct(private PositionService $positionService)
    {
        $this->middleware('checkroles:Admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $this->authorize('index', auth()->user());
        return response()->json($this->positionService->getAllPositions(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreatePositionRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreatePositionRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', Position::class);
            return response()->json($this->positionService->savePosition($request->validated()), 201);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Position $position
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Position $position): JsonResponse
    {
        return response()->json($this->positionService->getPositionByID($position));
    }

    public function update(CreatePositionRequest $request, Position $position): JsonResponse
    {
        try {
            $this->authorize('update', $position);
            return response()->json($this->positionService->updatePosition($request->validated(), $position), 200);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);        
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Position $position): JsonResponse
    {
        try {
            $this->authorize('destroy', $position);
            $this->positionService->deletePosition($position);
            return response()->json(['message' => 'Posición eliminada'], 200);
        } catch (Throwable $th) {
            return response()->json($th, 500);
        }
    }
}
