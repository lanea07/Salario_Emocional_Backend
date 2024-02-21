<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthTest extends TestCase
{

    use DatabaseTransactions;

    public function test_user_can_login(): void
    {
        Sanctum::actingAs(
            $user = new User([
                'email' => 'root@localhost',
                'password' => 'root@localhost',
                'device_name' => 'test'
            ])
        );
        $response = $this->get('/api/benefit');
        $response->assertOk();
    }
}
