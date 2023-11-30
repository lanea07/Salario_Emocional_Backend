<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Role extends Model
{
    use HasFactory;

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
        } catch (\Throwable $th) {
            throw new ModelNotFoundException('Rol no encontrado');
        }
    }
}
