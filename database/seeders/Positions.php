<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Positions extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Position::create([
            'name' => 'Analista de Servicio al Cliente'
        ]);
        Position::create([
            'name' => 'Auxiliar de Experiencia del Cliente'
        ]);
        Position::create([
            'name' => 'Coordinador de Experiencia del Cliente'
        ]);
        Position::create([
            'name' => 'Jefe de Experiencia del Cliente'
        ]);

        // Position::create([
        //     'name' => 'Leader'
        // ]);

        // Position::create([
        //     'name' => 'Subordinate'
        // ]);
    }
}
