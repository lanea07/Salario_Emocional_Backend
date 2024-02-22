<?php

namespace App\Providers;

use App\Events\NewBenefitUserWithoutLeaderEvent;
use App\Events\NewBenefitUserWithLeaderEvent;
use App\Events\BenefitDecisionEvent;
use App\Listeners\NewBenefitUserWithoutLeaderListener;
use App\Listeners\NewBenefitUserWithLeaderListener;
use App\Listeners\BenefitDecisionListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        NewBenefitUserWithoutLeaderEvent::class => [
            NewBenefitUserWithoutLeaderListener::class,
        ],
        NewBenefitUserWithLeaderEvent::class => [
            NewBenefitUserWithLeaderListener::class,
        ],
        BenefitDecisionEvent::class => [
            BenefitDecisionListener::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
