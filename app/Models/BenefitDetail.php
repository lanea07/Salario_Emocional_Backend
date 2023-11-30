<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BenefitDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'time_hours',
        'valid_id',
    ];

    protected $casts = [
        'valid_id' => 'boolean',
    ];

    public function benefit()
    {
        return $this->belongsToMany(Benefit::class)->withTimestamps();
    }

    public function resolveRouteBinding($value, $field = null)
    {
        try {
            return $this->where('id', $value)->firstOrFail();
        } catch (\Throwable $th) {
            throw new ModelNotFoundException('Detalle de Beneficio no encontrado');
        }
    }
}
