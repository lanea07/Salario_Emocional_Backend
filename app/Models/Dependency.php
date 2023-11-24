<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
}
