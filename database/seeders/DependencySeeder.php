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
        Dependency::create(['name' => 'root']);
        Dependency::create(['name' => 'Presidencia']);
        Dependency::create(['name' => 'Gerencia de Tecnología, Logística y Procesos', 'parent_id' => 2]);
        Dependency::create(['name' => 'Gerencia de Finanzas y Crédito', 'parent_id' => 2]);
        Dependency::create(['name' => 'Gerencia Jurídica', 'parent_id' => 2]);
        Dependency::create(['name' => 'Gerencia de Gestión Humana', 'parent_id' => 2]);
        Dependency::create(['name' => 'Gerencia Comercial (electro y bazar)', 'parent_id' => 2]);
        Dependency::create(['name' => 'Gerencia Comercial (hogar, vestuario y calzado) y de Mercadeo', 'parent_id' => 2]);
        Dependency::create(['name' => 'Gerencia de Operaciones y Experiencia al Cliente', 'parent_id' => 2]);
    }
}
