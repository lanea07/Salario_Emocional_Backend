<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BenefitDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'time_hours'
    ];

    public function benefit()
    {
        return $this->belongsToMany(Benefit::class)->withTimestamps();
    }
}
