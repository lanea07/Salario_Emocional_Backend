<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('benefits', function (Blueprint $table) {
            $table->unique('name');
        });
        Schema::table('benefit_details', function (Blueprint $table) {
            $table->unique('name');
        });
        Schema::table('positions', function (Blueprint $table) {
            $table->unique('name');
        });
        Schema::table('roles', function (Blueprint $table) {
            $table->unique('name');
        });
        Schema::table('benefits', function (Blueprint $table) {
            $table->text('politicas_path')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('benefits', function (Blueprint $table) {
            $table->dropUnique('benefits_name_unique');
        });
        Schema::table('benefit_details', function (Blueprint $table) {
            $table->dropUnique('benefit_details_name_unique');
        });
        Schema::table('positions', function (Blueprint $table) {
            $table->dropUnique('positions_name_unique');
        });
        Schema::table('roles', function (Blueprint $table) {
            $table->dropUnique('roles_name_unique');
        });
        Schema::table('benefits', function (Blueprint $table) {
            $table->dropColumn('politicas_path');
        });
    }
};
