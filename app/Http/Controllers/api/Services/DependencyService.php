<?php

namespace App\Http\Controllers\api\Services;

use App\Models\Dependency;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class DependencyService
{

    /**
     * Get all dependencies
     *
     * @return Collection
     */
    public function getAllDependencies(): Collection
    {
        $userDependency = auth()->user()->dependency;
        if (auth()->user()->isAdmin()) {
            if ($userDependency->parent_id !== null) {
                $userDependency = $userDependency->rootAncestor()->first();
            }
        }
        $userDependency = $userDependency->descendantsAndSelf()->with(['users.positions'])->get();
        return $userDependency->toTree();
    }

    /**
     * Get all dependencies ancestors
     *
     * @param Request $request
     * @return Collection
     */
    public function getAllDependenciesAncestors(Request $request): Collection
    {
        $userDependency = Dependency::find($request->id)->ancestorsAndSelf()->with(['users.positions'])->get();
        return $userDependency->toTree();
    }

    /**
     * Save a new dependency
     *
     * @param array $dependencyData
     * @return Dependency
     */
    public function saveDependency(array $dependencyData): Dependency
    {
        return Dependency::create($dependencyData);
    }

    /**
     * Get a dependency by id
     *
     * @param Dependency $dependency
     * @return Collection
     */
    public function getDependencyById(Dependency $dependency): Collection
    {
        $dependency = $dependency->descendantsAndSelf()->with(['users.positions'])->get();
        return $dependency->toTree();
    }

    /**
     * Update a dependency
     *
     * @param array $dependencyData
     * @param Dependency $dependency
     * @return Dependency
     */
    public function updateDependency(array $dependencyData, Dependency $dependency): Dependency
    {
        $dependency->update($dependencyData);
        return $dependency;
    }

    /**
     * Delete a dependency
     *
     * @param Dependency $dependency
     */
    public function deleteDependency(Dependency $dependency): void
    {
        throw new \Exception('No se puede eliminar una dependencia');
    }

    /**
     * Return all dependencies in flat format
     *
     * @return Collection
     */
    public function getNonTreeValidDependencies(): Collection
    {
        return Dependency::is_valid()->oldest('name')->get();
    }
}
