<?php

namespace Tests\migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCronsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('crons', function (Blueprint $table) {
            $table->string('command');
            $table->integer('next_run');
            $table->integer('last_run');
            $table->timestamps();
            $table->primary('command');
            $table->index('next_run');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crons');
    }
};
