<?php

namespace App\Http\Controllers\api\Services;

use App\Models\Dependency;
use Illuminate\Database\Eloquent\Collection;

class DependencyService
{

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

    public function getAllDependenciesAncestors(): Collection
    {
        $userDependency = auth()->user()->dependency;
        $userDependency = $userDependency->ancestorsAndSelf()->with(['users.positions'])->get();
        return $userDependency->toTree();
    }

    public function saveDependency(array $dependencyData): Dependency
    {
        return Dependency::create($dependencyData);
    }

    public function getDependencyById(Dependency $dependency): Collection
    {
        $dependency = $dependency->descendantsAndSelf()->with(['users.positions'])->get();
        return $dependency->toTree();
    }

    public function updateDependency(array $dependencyData, Dependency $dependency): Dependency
    {
        $dependency->update($dependencyData);
        return $dependency;
    }

    public function deleteDependency(Dependency $dependency): void
    {
        $dependency->delete();
    }
}
