<?php

namespace Database\Seeders;

use App\Models\BenefitUser;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Users extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $user = User::create([
        //     'name' => 'First User',
        //     'password' => 'Admin',
        //     'email' => 'firstuser@company.com',
        //     'position_id' => 1
        // ]);
        // $user->roles()->attach(1);

        // $user = User::create([
        //     'name' => 'Second User',
        //     'password' => 'User',
        //     'email' => 'seconduser@company.com',
        //     'position_id' => 2,
        //     'leader' => 1
        // ]);
        // $user->roles()->attach(2);

        $user = User::create([
            'name' => 'Juan Camilo Soto Pineda',
            'password' => 'Marianita.07',
            'email' => 'juan.soto@flamingo.com.co',
            'position_id' => 2,
            'leader' => 1
        ]);
        $user->roles()->attach(1);


        // BenefitUser::create([
        //     'benefit_id' => 2,
        //     'benefit_detail_id' => 2,
        //     'user_id' => 2,
        //     'benefit_begin_time' => '2023-05-26 07:00:00',
        //     'benefit_end_time' => '2023-05-26 09:00:00'
        // ]);

        // BenefitUser::create([
        //     'benefit_id' => 1,
        //     'benefit_detail_id' => 2,
        //     'user_id' => 2,
        //     'benefit_begin_time' => '2023-05-07 07:00:00',
        //     'benefit_end_time' => '2023-05-07 11:00:00'
        // ]);

        // BenefitUser::create([
        //     'benefit_id' => 1,
        //     'benefit_detail_id' => 2,
        //     'user_id' => 1,
        //     'benefit_begin_time' => '2023-06-02 07:00:00',
        //     'benefit_end_time' => '2023-06-02 11:00:00'
        // ]);
    }
}
