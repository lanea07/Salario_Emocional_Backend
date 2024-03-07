<?php

namespace Tests;

use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Contracts\Console\Kernel;
use Illuminate\Foundation\Application;
use Tests\migrations\CreateBenefitBenefitDetailTable;
use Tests\migrations\CreateBenefitDetailsTable;
use Tests\migrations\CreateBenefitsTable;
use Tests\migrations\CreateBenefitUserTable;
use Tests\migrations\CreateCronsTable;
use Tests\migrations\CreateDepenenciesTable;
use Tests\migrations\CreateFailedJobsTable;
use Tests\migrations\CreateJobsTable;
use Tests\migrations\CreatePasswordResetTokensTable;
use Tests\migrations\CreatePersonalAccessTokensTable;
use Tests\migrations\CreatePositionsTable;
use Tests\migrations\CreatePropertyBagTable;
use Tests\migrations\CreateRolesTable;
use Tests\migrations\CreateRoleUserTable;
use Tests\migrations\CreateUsersTable;

trait CreatesApplication
{

    /**
     * Creates the application.
     */
    public function createApplication(): Application
    {
        $app = require __DIR__.'/../bootstrap/app.php';

        $app->make(Kernel::class)->bootstrap();

        $this->migrate();

        $this->seedDB();

        $this->rootUser = $this->getRootUser();

        return $app;
    }

    /**
     * Run the migrations for the tests.
     */
    protected function migrate()
    {
        (new CreatePositionsTable())->up();
        (new CreateDepenenciesTable())->up();
        (new CreateUsersTable())->up();
        (new CreatePasswordResetTokensTable())->up();
        (new CreatePropertyBagTable())->up();
        (new CreateFailedJobsTable())->up();
        (new CreatePersonalAccessTokensTable())->up();
        (new CreateBenefitsTable())->up();
        (new CreateBenefitDetailsTable())->up();
        (new CreateRolesTable())->up();
        (new CreateBenefitBenefitDetailTable())->up();
        (new CreateRoleUserTable())->up();
        (new CreateBenefitUserTable())->up();
        (new CreateJobsTable())->up();
        (new CreateCronsTable())->up();
    }

    protected function seedDB()
    {
        (new DatabaseSeeder())->run();
    }

    protected function getRootUser()
    {
        return User::find(1);
    }
}
