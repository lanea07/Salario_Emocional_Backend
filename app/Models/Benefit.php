<?php

namespace App\Models;

use App\Casts\GooglePath;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Benefit extends Model
{
    use HasFactory;

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

    // public function benefit_detail_of_user()
    // {
    //     return $this->belongsToMany(BenefitDetail::class, 'benefit_user');
    // }
}
