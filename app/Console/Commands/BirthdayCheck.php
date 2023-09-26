<?php

namespace App\Console\Commands;

use App\Jobs\SendBirthdayReminders;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class BirthdayCheck extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'birthday:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to check current day birthdays';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        SendBirthdayReminders::dispatch();
    }
}
