<?php

namespace Database\Seeders;

use App\Models\Benefit;
use App\Models\BenefitDetail;
use Illuminate\Database\Seeder;

class BenefitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Beneficios
        $miCumpleaños = Benefit::create([
            'name' => 'Mi Cumpleaños'
        ]);

        $miBancoHoras = Benefit::create([
            'name' => 'Mi Banco de Horas'
        ]);

        $miHorarioFlexible = Benefit::create([
            'name' => 'Mi Horario Flexible'
        ]);

        $miViernes = Benefit::create([
            'name' => 'Mi Viernes'
        ]);

        $tiempoViajero = Benefit::create([
            'name' => 'Tiempo para el Viajero'
        ]);

        $misVacaciones = Benefit::create([
            'name' => 'Mis Vacaciones'
        ]);

        $miAlternancia = Benefit::create([
            'name' => 'Mi Alternancia'
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

        $alternancia1 = BenefitDetail::create([
            'name' => 'Lunes - Martes'
        ]);
        $alternancia2 = BenefitDetail::create([
            'name' => 'Lunes - Miércoles'
        ]);
        $alternancia3 = BenefitDetail::create([
            'name' => 'Lunes - Jueves'
        ]);
        $alternancia4 = BenefitDetail::create([
            'name' => 'Lunes - Viernes'
        ]);
        $alternancia5 = BenefitDetail::create([
            'name' => 'Martes - Miércoles'
        ]);
        $alternancia6 = BenefitDetail::create([
            'name' => 'Martes - Jueves'
        ]);
        $alternancia7 = BenefitDetail::create([
            'name' => 'Martes - Viernes'
        ]);
        $alternancia8 = BenefitDetail::create([
            'name' => 'Miércoles - Jueves'
        ]);
        $alternancia9 = BenefitDetail::create([
            'name' => 'Miércoles - Viernes'
        ]);
        $alternancia10 = BenefitDetail::create([
            'name' => 'Jueves - Viernes'
        ]);



        // Establecimiento de las relaciones
        $miCumpleaños->benefit_detail()->attach($horas4);

        $miBancoHoras->benefit_detail()->attach([
            $horas2,
            $horas4,
            $horas6,
            $horas8,
        ]);

        $miHorarioFlexible->benefit_detail()->attach([
            $franja1,
            $franja2,
            $franja3,
            $franja4,
        ]);
        

        $miViernes->benefit_detail()->attach($horas4);

        $tiempoViajero->benefit_detail()->attach([
            $horas2,
            $personalizado,
        ]);


        $misVacaciones->benefit_detail()->attach($personalizado);

        $miAlternancia->benefit_detail()->attach([
            $alternancia1->id,
            $alternancia2->id,
            $alternancia3->id,
            $alternancia4->id,
            $alternancia5->id,
            $alternancia6->id,
            $alternancia7->id,
            $alternancia8->id,
            $alternancia9->id,
            $alternancia10->id,
        ]);
    }
}
