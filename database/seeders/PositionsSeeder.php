<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Seeder;

class PositionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Position::create(['name' => 'Presidente']);
        Position::create(['name' => 'Gerente']);
        Position::create(['name' => 'Jefe']);
        Position::create(['name' => 'Coordinador']);
        Position::create(['name' => 'Analista']);
        Position::create(['name' => 'Auxiliar']);
        Position::create(['name' => 'Practicante']);
    }
}
