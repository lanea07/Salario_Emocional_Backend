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

        $misVacaciones = Benefit::create([
            'name' => 'Mis Vacaciones'
        ]);

        $trabajoHibrido = Benefit::create([
            'name' => 'Trabajo Híbrido'
        ]);

        $diaDeLaFamilia = Benefit::create([
            'name' => 'Día de la Familia'
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
        $personalizado = BenefitDetail::create(['name' => 'Personalizado',
            'time_hours' => 1
        ]);

        $trabajoHibrido1 = BenefitDetail::create([
            'name' => 'Lunes - Martes - Miércoles',
            'time_hours' => 1,
        ]);
        $trabajoHibrido2 = BenefitDetail::create([
            'name' => 'Lunes - Martes - Jueves',
            'time_hours' => 1,
        ]);
        $trabajoHibrido3 = BenefitDetail::create([
            'name' => 'Lunes - Martes - Viernes',
            'time_hours' => 1,
        ]);
        $trabajoHibrido4 = BenefitDetail::create([
            'name' => 'Lunes - Miércoles - Jueves',
            'time_hours' => 1,
        ]);
        $trabajoHibrido5 = BenefitDetail::create([
            'name' => 'Lunes - Miércoles - Viernes',
            'time_hours' => 1,
        ]);
        $trabajoHibrido6 = BenefitDetail::create([
            'name' => 'Lunes - Jueves - Viernes',
            'time_hours' => 1,
        ]);
        $trabajoHibrido7 = BenefitDetail::create([
            'name' => 'Martes - Miércoles - Jueves',
            'time_hours' => 1,
        ]);
        $trabajoHibrido8 = BenefitDetail::create([
            'name' => 'Martes - Miércoles - Viernes',
            'time_hours' => 1,
        ]);
        $trabajoHibrido9  = BenefitDetail::create([
            'name' => 'Martes - Jueves - Viernes',
            'time_hours' => 1,
        ]);
        $trabajoHibrido10  = BenefitDetail::create([
            'name' => 'Miércoles - Jueves - Viernes',
            'time_hours' => 1,
        ]);
        $miCumpleanosManana = BenefitDetail::create([
            'name' => 'Mañana',
            'time_hours' => 4
        ]);
        $miCumpleanosTarde = BenefitDetail::create([
            'name' => 'Tarde',
            'time_hours' => 4
        ]);


        // Establecimiento de las relaciones
        $diaDeLaFamilia->benefit_detail()->attach($personalizado);

        $miCumpleaños->benefit_detail()->attach([
            $miCumpleanosManana->id,
            $miCumpleanosTarde->id
        ]);

        $miBancoHoras->benefit_detail()->attach([$horas2->id,
            $horas4->id,
            $horas6->id,
            $horas8->id,
        ]);

        $miHorarioFlexible->benefit_detail()->attach([
            $franja1->id,
            $franja2->id,
            $franja3->id,
            $franja4->id,
        ]);
        

        $miViernes->benefit_detail()->attach($horas4);

        $misVacaciones->benefit_detail()->attach($personalizado);

        $trabajoHibrido->benefit_detail()->attach([
            $trabajoHibrido1->id,
            $trabajoHibrido2->id,
            $trabajoHibrido3->id,
            $trabajoHibrido4->id,
            $trabajoHibrido5->id,
            $trabajoHibrido6->id,
            $trabajoHibrido7->id,
            $trabajoHibrido8->id,
            $trabajoHibrido9->id,
            $trabajoHibrido10->id,
        ]);
    }
}
