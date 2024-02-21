<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserTest extends TestCase
{

    use DatabaseTransactions;

    public function test_can_get_all_users()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->get('/api/user');
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                "id",
                "name",
                "email",
                "requirePassChange",
                "dependency_id",
                "position_id",
                "leader",
                "valid_id",
                "birthdate",
                "email_verified_at",
                "created_at",
                "updated_at",
                "dependency",
                "parent",
                "positions",
                "roles"
            ]
        ]);
    }

    public function test_can_create_user()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/user',
            [
                'name' => 'root',
                'email' => 'root@localhost.com',
                'password' => '',
                'dependency_id' => 1,
                'position_id' => 1,
                'valid_id' => 1,
                'rolesFormGroup' => [[]]
            ]
        );
        $response->assertCreated(201);
    }

    /**
     * @depends test_can_create_user
     */
    public function test_cant_create_duplicated_user_by_email()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/user',
            [
                'name' => 'root',
                'email' => 'root@localhost.com',
                'password' => '',
                'dependency_id' => 1,
                'position_id' => 1,
                'valid_id' => 1,
                'rolesFormGroup' => [[]]
            ]
        );
        $response->assertCreated(400);
    }

    public function test_can_get_user_by_id()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->get('/api/user/1');
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                "id",
                "name",
                "email",
                "requirePassChange",
                "dependency_id",
                "position_id",
                "leader",
                "valid_id",
                "birthdate",
                "email_verified_at",
                "created_at",
                "updated_at",
                "dependency",
                "parent",
                "positions",
                "roles"
            ]
        ]);
    }

    public function test_can_update_user()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->put(
            '/api/user/1',
            [
                'name' => 'updated name',
                'email' => 'updatedemail@localhost.com',
                'password' => '',
                'dependency_id' => 1,
                'position_id' => 1,
                'valid_id' => 1,
                'rolesFormGroup' => [[]]
            ]
        );
        $response->assertOk();
    }

    public function test_can_delete_user()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->delete('/api/user/1');
        $response->assertInternalServerError();
    }
    
}
