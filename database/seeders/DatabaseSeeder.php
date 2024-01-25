<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PositionsSeeder::class,
            BenefitsSeeder::class,
            RolesSeeder::class,
            DependencySeeder::class,
            UsersSeeder::class,
        ]);

        $user = User::create([
            'name' => 'root',
            'email' => 'root@localhost',
            'password' => 'root',
            'dependency_id' => 1,
            'position_id' => 1,
        ]);
        $user->roles()->attach(1);
    }
}
