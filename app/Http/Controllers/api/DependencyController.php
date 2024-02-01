<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\DependencyService;
use App\Http\Controllers\Controller;
use App\Models\Dependency;
use App\Http\Requests\StoreDependencyRequest;
use App\Http\Requests\UpdateDependencyRequest;
use Illuminate\Http\Request;

class DependencyController extends Controller
{

    private DependencyService $dependencyService;

    public function __construct(DependencyService $dependencyService)
    {
        $this->dependencyService = $dependencyService;
        $this->middleware('checkroles:Admin', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json($this->dependencyService->getAllDependencies(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDependencyRequest $request)
    {
        try {
            $this->authorize('create', Dependency::class);
            return response()->json($this->dependencyService->saveDependency($request->validated()), 201);
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

    /**
     * Display the specified resource.
     */
    public function show(Dependency $dependency)
    {
        return response()->json($this->dependencyService->getDependencyById($dependency), 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDependencyRequest $request, Dependency $dependency)
    {
        try {
            $this->authorize('update', $dependency);
            return response()->json($this->dependencyService->updatedependency($request->validated(), $dependency), 200);
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
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dependency $dependency)
    {
        try {
            $this->authorize('destroy', $dependency);
            $this->dependencyService->deleteDependency($dependency);
            return response()->json(['message' => 'Dependencia eliminada'], 200);
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }

    public function indexAncestors(Request $request)
    {
        return response()->json($this->dependencyService->getAllDependenciesAncestors($request), 200);
    }

    public function getNonTreeValidDependencies()
    {
        return response()->json($this->dependencyService->getNonTreeValidDependencies(), 200);
    }
}
