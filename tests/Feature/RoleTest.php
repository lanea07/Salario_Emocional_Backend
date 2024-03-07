<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class RoleTest extends TestCase
{

    use DatabaseMigrations;

    public function test_can_get_all_role()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->get('/api/role');
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                "id",
                "name",
                "valid_id",
                "created_at",
                "updated_at",
            ]
        ]);
    }

    public function test_can_create_role()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/role',
            [
                'name' => 'role Test',
            ]
        );
        $response->assertCreated();
    }

    /**
     * @depends test_can_create_role
     */
    public function test_cant_create_duplicated_role_by_name()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/role',
            [
                'name' => 'role Test',
            ]
        );
        $response->assertCreated();
        $response = $this->post(
            '/api/role',
            [
                'name' => 'role Test',
            ]
        );
        $response->assertStatus(400);
    }

    public function test_can_get_role_by_id()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/role',
            [
                'name' => 'role Test',
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->get("/api/role/{$createdResource->id}");
        $response->assertOk();
        $response->assertJsonStructure([
            "id",
            "name",
            "valid_id",
            "created_at",
            "updated_at",
        ]);
    }

    public function test_can_update_role()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/role',
            [
                'name' => 'role Test',
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->put(
            "/api/role/{$createdResource->id}",
            [
                'name' => 'Sample Test',
            ]
        );
        $response->assertOk();
    }

    public function test_can_delete_role()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/role',
            [
                'name' => 'role Test',
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->delete("/api/role/{$createdResource->id}");
        $response->assertInternalServerError();
    }
}
