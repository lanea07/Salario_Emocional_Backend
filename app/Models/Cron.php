<?php

namespace App\Models;

use App\Enums\CarbonTimePeriodsEnum;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Cron extends Model
{

    protected $primaryKey = 'command';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'command',
        'next_run',
        'last_run'
    ];

    /**
     * Validates if a given artisan command can run in function of the current timestamp and returns a boolean for the command execution conditional.
     * 
     * @param string $command The command to execute
     * @param int $interval Units to be added to next execution
     * @param string $beginDate Sets initial date job must run
     * @param CarbonTimePeriodsInterval $period Period of time in which interval will be incremented
     * @param string $nextTimeRun (optional) Used to set next time run will take place, default 08:00:00
     */
    public static function shouldIRun(string $command, int $interval, CarbonTimePeriodsEnum $period, string $beginDate = '', string $nextTimeRun = '08:00:00'): bool
    {
        $cron = Cron::find($command);
        $now  = Carbon::now();
        $carbonMethod = $period->value;
        $futureRun = new Carbon($now->toDateString() . ' ' . $nextTimeRun);
        if ($cron && $cron->next_run > $now->timestamp) {
            return false;
        }
        if (!$cron && $beginDate) {
            $futureRun = new Carbon($beginDate . ' ' . $nextTimeRun);
            Cron::updateOrCreate(
                ['command'  => $command],
                [
                    'next_run' => $futureRun->timestamp,
                    'last_run' => Carbon::now()->timestamp
                ]
            );
            return false;
        }
        Cron::updateOrCreate(
            ['command'  => $command],
            [
                'next_run' => $futureRun->$carbonMethod($interval)->timestamp,
                'last_run' => Carbon::now()->timestamp
            ]
        );
        return true;
    }
}
