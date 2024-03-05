<?php

namespace App\Models;

use App\Casts\GooglePath;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Storage;
use LaravelPropertyBag\Settings\HasSettings;
use Throwable;

class Benefit extends Model
{

    use HasSettings;

    public $table = 'benefits';

    protected $fillable = [
        'name',
        'politicas_path',
        'logo_file',
        'valid_id',
    ];

    protected $casts = [
        'politicas_path' => GooglePath::class,
        'logo_file' => GooglePath::class,
        'valid_id' => 'boolean',
    ];

    protected $appends = [
        'encoded_logo',
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

    public function getEncodedLogoAttribute()
    {
        $base64 = $this->logo_file ? Storage::disk('google')->get($this->getRawOriginal('logo_file')) : null;
        return $base64;
    }
}
