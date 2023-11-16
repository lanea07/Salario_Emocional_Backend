<?php

namespace Database\Seeders;

use App\Models\Dependency;
use App\Models\User;
use Illuminate\Database\Seeder;

class DependencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dependency::create(['name' => 'Presidencia']);
        $dependency = Dependency::create(['name' => 'Gerencia de Tecnología, Logística y Procesos', 'parent_id' => 1]);
        $dependency = Dependency::create(['name' => 'Gerencia de Finanzas y Crédito', 'parent_id' => 1]);
        $dependency = Dependency::create(['name' => 'Gerencia Jurídica', 'parent_id' => 1]);
        $dependency = Dependency::create(['name' => 'Gerencia de Gestión Humana', 'parent_id' => 1]);
        $dependency = Dependency::create(['name' => 'Gerencia Comercial (electro y bazar)', 'parent_id' => 1]);
        $dependency = Dependency::create(['name' => 'Gerencia Comercial (hogar, vestuario y calzado) y de Mercadeo', 'parent_id' => 1]);

        $dependency = Dependency::create(['name' => 'Gerencia de Operaciones y Experiencia al Cliente', 'parent_id' => 1]);
        $user = User::create([
            'name' => 'Roberto Arturo Osorio García',
            'password' => 'Marianita.07',
            'email' => 'roberto.osorio@flamingo.com.co',
            'dependency_id' => $dependency->id,
            'position_id' => 2,
        ]);

        $dependency = Dependency::create(['name' => 'Jefe de Experiencia del Cliente', 'parent_id' => $dependency->id]);
        $user = User::create([
            'name' => 'Sandra Milena Soto Muñoz',
            'password' => 'Marianita.07',
            'email' => 'sandra.soto@mefia.com.co',
            'dependency_id' => $dependency->id,
            'position_id' => 3,
        ]);

        $dependency = Dependency::create(['name' => 'Coordinador de Experiencia del Cliente', 'parent_id' => $dependency->id]);
        $user = User::create([
            'name' => 'Juan Camilo Soto Pineda',
            'password' => 'Marianita.07',
            'email' => 'juan.soto@flamingo.com.co',
            'dependency_id' => $dependency->id,
            'position_id' => 4,
        ]);
        $user->roles()->attach(1);
        $user = User::create([
            'name' => 'Paola Loaiza Paz',
            'password' => 'Marianita.07',
            'email' => 'paola.loaiza@flamingo.com.co',
            'dependency_id' => $dependency->id,
            'position_id' => 4,
        ]);

        $user = User::create([
            'name' => 'Alejandro Quiñonez Montoya',
            'password' => 'Marianita.07',
            'email' => 'alejandro.quinonez@flamingo.com.co',
            'dependency_id' => $dependency->id,
            'position_id' => 4,
        ]);

        $dependency = Dependency::create(['name' => 'Analista de Servicio al Cliente', 'parent_id' => $dependency->id]);
        $user = User::create([
            'name' => 'Marinela Álvarez Valencia',
            'password' => 'Marianita.07',
            'email' => 'marinela.alvarez@flamingo.com.co',
            'dependency_id' => $dependency->id,
            'position_id' => 5,
        ]);

        Dependency::create(['name' => 'Auxiliar de Experiencia del Cliente', 'parent_id' => $dependency->id]);
    }
}
