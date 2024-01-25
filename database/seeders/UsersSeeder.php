<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name' => 'root',
            'email' => 'root@localhost',
            'password' => 'root@localhost',
            'dependency_id' => 1,
            'position_id' => 1,
        ]);
        $user->roles()->attach(1);
    }
}
