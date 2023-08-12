<?php

namespace Database\Seeders;

use App\Models\Benefit;
use App\Models\BenefitDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Benefits extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Beneficios
        // Mi Cumpleaños
        $miCumpleaños = Benefit::create([
            'name' => 'Mi Cumpleaños'
        ]);

        // Mi Banco de Horas
        $miBancoHoras = Benefit::create([
            'name' => 'Mi Banco de Horas'
        ]);

        // Mi Horario Flexible
        $miHorarioFlexible = Benefit::create([
            'name' => 'Mi Horario Flexible'
        ]);

        // Mi Viernes
        $miViernes = Benefit::create([
            'name' => 'Mi Viernes'
        ]);

        // Tiempo para el Viajero
        $tiempoViajero = Benefit::create([
            'name' => 'Tiempo para el Viajero'
        ]);


        // Detalles de Beneficios
        $horas2 = BenefitDetail::create([
            'name' => '2 Horas',
            'time_hours' => 2
        ]);
        $horas4 = BenefitDetail::create([
            'name' => '4 Horas',
            'time_hours' => 4
        ]);
        $horas6 = BenefitDetail::create([
            'name' => '6 Horas',
            'time_hours' => 6
        ]);
        $horas8 = BenefitDetail::create([
            'name' => '8 Horas',
            'time_hours' => 8
        ]);
        $franja1 = BenefitDetail::create([
            'name' => 'De 6:30 a.m. a 16:30 p.m.',
            'time_hours' => 1
        ]);
        $franja2 = BenefitDetail::create([
            'name' => 'De 7:00 a.m. a 17:00 p.m.',
            'time_hours' => 1
        ]);
        $franja3 = BenefitDetail::create([
            'name' => 'De 7:30 a.m. a 17:30 p.m.',
            'time_hours' => 1
        ]);
        $franja4 = BenefitDetail::create([
            'name' => 'De 8:00 a.m. a 18:00 p.m.',
            'time_hours' => 1
        ]);
        $personalizado = BenefitDetail::create([
            'name' => 'Personalizado'
        ]);


        // Establecimiento de las relaciones
        // Mi Cumpleaños
        $miCumpleaños->benefit_detail()->attach($horas4);

        // Mi Banco de Horas
        $miBancoHoras->benefit_detail()->attach($horas2);
        $miBancoHoras->benefit_detail()->attach($horas4);
        $miBancoHoras->benefit_detail()->attach($horas6);
        $miBancoHoras->benefit_detail()->attach($horas8);

        // Mi Horario Flexible
        $miHorarioFlexible->benefit_detail()->attach($franja1);
        $miHorarioFlexible->benefit_detail()->attach($franja2);
        $miHorarioFlexible->benefit_detail()->attach($franja3);
        $miHorarioFlexible->benefit_detail()->attach($franja4);

        // Mi Viernes
        $miViernes->benefit_detail()->attach($horas4);

        // Tiempo para el Viajero
        $tiempoViajero->benefit_detail()->attach($horas2);
        $tiempoViajero->benefit_detail()->attach($personalizado);
    }
}
