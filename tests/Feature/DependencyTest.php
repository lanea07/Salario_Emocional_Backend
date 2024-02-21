<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class DependencyTest extends TestCase
{
    use DatabaseTransactions;

    public function test_can_get_all_dependency()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->get('/api/dependency');
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                "id",
                "name",
                "parent_id",
                "valid_id",
                "created_at",
                "updated_at",
                "depth",
                "path",
                "users" => [
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
                        "positions" => [
                            "id",
                            "name",
                            "valid_id",
                            "created_at",
                            "updated_at"
                        ]
                    ],
                ],
                "children" => []
            ]
        ]);
    }

    public function test_can_create_dependency()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/dependency',
            [
                'name' => 'Dependency Test',
                'parent_id' => 1
            ]
        );
        $response->assertCreated(201);
    }

    /**
     * @depends test_can_create_dependency
     */
    public function test_cant_create_duplicated_dependency_by_name()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/dependency',
            [
                'name' => 'Dependency Test',
                'parent_id' => 1
            ]
        );
        $response->assertCreated(400);
    }

    public function test_can_get_dependency_by_id()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/dependency',
            [
                'name' => 'Dependency Test',
                'parent_id' => 1
            ]
        );
        $response->assertCreated(201);
        $createdResource = $response->getOriginalContent();
        $response = $this->get("/api/dependency/{$createdResource->id}");
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                "id",
                "name",
                "parent_id",
                "valid_id",
                "created_at",
                "updated_at",
                "depth",
                "path",
                "users" => [
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
                        "positions" => [
                            "id",
                            "name",
                            "valid_id",
                            "created_at",
                            "updated_at"
                        ]
                    ],
                ],
                "children" => []
            ]
        ]);
    }

    public function test_can_update_dependency()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/dependency',
            [
                'name' => 'Dependency Test',
                'parent_id' => 1
            ]
        );
        $response->assertCreated(201);
        $createdResource = $response->getOriginalContent();
        $response = $this->put(
            "/api/dependency/{$createdResource->id}",
            [
                'name' => 'Sample Test',
                'parent_id' => 1
            ]
        );
        $response->assertOk();
    }

    public function test_can_delete_dependency()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/dependency',
            [
                'name' => 'Dependency Test',
                'parent_id' => 1
            ]
        );
        $response->assertCreated(201);
        $createdResource = $response->getOriginalContent();
        $response = $this->delete("/api/dependency/{$createdResource->id}");
        $response->assertInternalServerError();
    }
}
