<?php

namespace App\Models;

use App\Casts\GooglePath;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Throwable;

class Benefit extends Model
{
    public $table = 'benefits';

    protected $fillable = [
        'name',
        'politicas_path',
        'valid_id',
    ];

    protected $casts = [
        'politicas_path' => GooglePath::class,
        'valid_id' => 'boolean',
    ];

    public function benefit_detail()
    {
        return $this->belongsToMany(BenefitDetail::class)->withTimestamps();
    }

    public function resolveRouteBinding($value, $field = null)
    {
        try {
            return $this->where('id', $value)->firstOrFail();
        } catch (Throwable $th) {
            throw new ModelNotFoundException('Beneficio no encontrado');
        }
    }

    public function scopeIs_Valid(Builder $query)
    {
        return $query->where('valid_id', true);
    }
}
