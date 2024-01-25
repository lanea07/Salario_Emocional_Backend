<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class User extends Model
{
    use HasApiTokens, HasFactory, Notifiable, HasRecursiveRelationships;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'requirePassChange',
        'dependency_id',
        'position_id',
        'leader',
        'valid_id',
        'birthdate',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'requirePassChange' => 'boolean',
        'valid_id' => 'boolean'
    ];

    public function getParentKeyName()
    {
        return 'leader';
    }

    public function benefit_user()
    {
        return $this->hasMany(BenefitUser::class);
    }

    public function benefits()
    {
        return $this->belongsToMany(Benefit::class)->withTimestamps();
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    public function leader_user()
    {
        return $this->belongsTo(User::class, 'leader');
    }

    public function positions()
    {
        return $this->hasOne(Position::class, 'id', 'position_id');
    }

    public function hasRoles(array $roles)
    {
        return $this->roles->pluck('name')->intersect($roles)->count();
    }

    public function isAdmin()
    {
        return $this->hasRoles(['Admin']);
    }

    public function requirePassChange()
    {
        return $this->requirePassChange;
    }

    public function dependency()
    {
        return $this->belongsTo(Dependency::class);
    }

    public function resolveRouteBinding($value, $field = null)
    {
        try {
            return $this->where('id', $value)->firstOrFail();
        } catch (\Throwable $th) {
            throw new ModelNotFoundException('Usuario no encontrado');
        }
    }
}
