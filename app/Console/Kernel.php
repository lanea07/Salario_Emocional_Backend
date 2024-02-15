<?php

namespace App\Console;

use App\Enums\CarbonTimePeriodsEnum;
use App\Models\Cron;
use Carbon\Carbon;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
        $schedule->command('birthday:check')->everyMinute()->when(function () {
            $initialDate = new Carbon();
            return Cron::shouldIRun('birthday:check', 1, CarbonTimePeriodsEnum::addMonths, $initialDate->toDateString());
        });
        $schedule->command('sanctum:prune-expired --hours=24')->when(function () {
            $initialDate = new Carbon();
            return Cron::shouldIRun('sanctum:prune-expired --hours=24', 1, CarbonTimePeriodsEnum::addDays, $initialDate->toDateString());
        });
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
