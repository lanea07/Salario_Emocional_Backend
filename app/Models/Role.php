<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Throwable;

class Role extends Model
{

    protected $fillable = [
        'name',
        'valid_id',
    ];

    protected $casts = [
        'valid_id' => 'boolean',
    ];
    
    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }

    public function resolveRouteBinding($value, $field = null)
    {
        try {
            return $this->where('id', $value)->firstOrFail();
        } catch (Throwable $th) {
            throw new ModelNotFoundException('Rol no encontrado');
        }
    }
}
