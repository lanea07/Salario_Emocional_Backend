<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Model //Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use \Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'position_id',
        'leader',
        'requirePassChange',
        'valid_id'
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
        'requirePassChange' => 'boolean'
    ];

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

    public function leader()
    {
        return $this->belongsTo(User::class, 'leader');
    }

    public function subordinates()
    {
        return $this->hasMany(User::class, 'leader');
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

    public function getParentKeyName()
    {
        return 'leader';
    }
}
