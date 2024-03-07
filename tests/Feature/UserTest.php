<?php

namespace Tests\Feature;

use App\Mail\NewUserCreated;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Mail;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserTest extends TestCase
{

    use DatabaseMigrations;

    public function test_can_get_all_users()
    {
        Sanctum::actingAs($this->rootUser);
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
        Sanctum::actingAs($this->rootUser);
        Mail::fake();
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
        Mail::assertQueued(NewUserCreated::class);
        $response->assertCreated();
    }

    /**
     * @depends test_can_create_user
     */
    public function test_cant_create_duplicated_user_by_email()
    {
        Sanctum::actingAs($this->rootUser);
        Mail::fake();
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
        $response->assertCreated();
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
        $response->assertStatus(400);
    }

    public function test_can_get_user_by_id()
    {
        Sanctum::actingAs($this->rootUser);
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
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->get("/api/user/{$createdResource->id}");
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
        Sanctum::actingAs($this->rootUser);
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
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->put(
            "/api/user/{$createdResource->id}",
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
        Sanctum::actingAs($this->rootUser);
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
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->delete("/api/user/{$createdResource->id}");
        $response->assertInternalServerError();
    }
    
}
