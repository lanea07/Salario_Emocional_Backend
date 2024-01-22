<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class Dependency extends Model
{
    use HasRecursiveRelationships;

    protected $fillable = [
        'name',
        'parent_id',
        'valid_id',
    ];

    protected $casts = [
        'valid_id' => 'boolean',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function resolveRouteBinding($value, $field = null)
    {
        try {
            return $this->where('id', $value)->firstOrFail();
        } catch (\Throwable $th) {
            throw new ModelNotFoundException('Dependencia no encontrada');
        }
    }
}
