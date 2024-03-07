<?php

namespace Tests\Feature;


use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthTest extends TestCase
{


    public function test_user_can_login(): void
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->get('/api/benefit');
        $response->assertOk();
    }
}
