<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Benefit;
use App\Models\BenefitDetail;
use App\Models\BenefitUser;
use App\Models\Position;
use App\Models\Role;
use App\Models\User;
use App\Policies\BenefitDetailPolicy;
use App\Policies\BenefitPolicy;
use App\Policies\BenefitUserPolicy;
use App\Policies\PositionPolicy;
use App\Policies\RolePolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;


class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Benefit::class => BenefitPolicy::class,
        BenefitDetail::class => BenefitDetailPolicy::class,
        BenefitUser::class => BenefitUserPolicy::class,
        Position::class => PositionPolicy::class,
        Role::class => RolePolicy::class,
        User::class => UserPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
        Gate::define('decideBenefitUser', [BenefitUserPolicy::class, 'decideBenefitUser']);

    }
}
