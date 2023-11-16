<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\DependencyService;
use App\Http\Controllers\Controller;
use App\Models\Dependency;
use App\Http\Requests\StoreDependencyRequest;
use App\Http\Requests\UpdateDependencyRequest;

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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dependency $dependency)
    {
        try {
            $this->authorize('destroy', $dependency);
            $this->dependencyService->deleteDependency($dependency);
            return response()->json(['msg' => 'Dependencia eliminada'], 200);
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }
}
