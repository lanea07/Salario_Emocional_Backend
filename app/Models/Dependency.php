<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class Dependency extends Model
{
    use HasFactory, HasRecursiveRelationships;

    protected $fillable = [
        'name',
        'address',
        'phone',
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
