<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthTest extends TestCase
{

    use DatabaseTransactions;

    public function test_user_can_login(): void
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->get('/api/benefit');
        $response->assertOk();
    }
}
