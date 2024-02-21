<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class PositionTest extends TestCase
{

    use DatabaseTransactions;

    public function test_can_get_all_position()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->get('/api/position');
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

    public function test_can_create_position()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/position',
            [
                'name' => 'position Test',
            ]
        );
        $response->assertCreated();
    }

    /**
     * @depends test_can_create_position
     */
    public function test_cant_create_duplicated_position_by_name()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/position',
            [
                'name' => 'position Test',
            ]
        );
        $response->assertCreated();
        $response = $this->post(
            '/api/position',
            [
                'name' => 'position Test',
            ]
        );
        $response->assertStatus(400);
    }

    public function test_can_get_position_by_id()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/position',
            [
                'name' => 'position Test',
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->get("/api/position/{$createdResource->id}");
        $response->assertOk();
        $response->assertJsonStructure([
            "id",
            "name",
            "valid_id",
            "created_at",
            "updated_at",
        ]);
    }

    public function test_can_update_position()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/position',
            [
                'name' => 'position Test',
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->put(
            "/api/position/{$createdResource->id}",
            [
                'name' => 'Sample Test',
            ]
        );
        $response->assertOk();
    }

    public function test_can_delete_position()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/position',
            [
                'name' => 'position Test',
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->delete("/api/position/{$createdResource->id}");
        $response->assertInternalServerError();
    }
}
