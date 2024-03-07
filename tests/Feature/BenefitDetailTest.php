<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class BenefitDetailTest extends TestCase
{
    use DatabaseMigrations;

    public function test_can_get_all_benefit_detail()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->get('/api/benefitdetail');
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                'id',
                'name',
                'time_hours',
                'valid_id',
                'created_at',
                'updated_at',
                'benefit' => [
                    '*' => [
                        'id',
                        'name',
                        'politicas_path',
                        'valid_id',
                        'created_at',
                        'updated_at',
                        'pivot' => [
                            'benefit_detail_id',
                            'benefit_id',
                            'created_at',
                            'updated_at'
                        ]
                    ]
                ]
            ]
        ]);
    }

    public function test_can_create_benefit_detail()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/benefitdetail',
            [
                'name' => 'test benefit detail',
                'time_hours' => 1
            ]
        );
        $response->assertCreated();
    }

    /**
     * @depends test_can_create_benefit_detail
     */
    public function test_cant_create_duplicated_benefit_by_name()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/benefitdetail',
            [
                'name' => 'test benefit detail',
                'time_hours' => 1
            ]
        );
        $response->assertCreated();
        $response = $this->post(
            '/api/benefitdetail',
            [
                'name' => 'test benefit detail',
                'time_hours' => 1
            ]
        );
        $response->assertStatus(400);
    }

    public function test_can_get_benefit_detail_by_id()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/benefitdetail',
            [
                'name' => 'test benefit detail',
                'time_hours' => 1
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->get("/api/benefitdetail/{$createdResource->id}");
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                'id',
                'name',
                'time_hours',
                'valid_id',
                'created_at',
                'updated_at',
                'benefit' => [
                    '*' => [
                        'id',
                        'name',
                        'politicas_path',
                        'valid_id',
                        'created_at',
                        'updated_at',
                        'pivot' => [
                            'benefit_detail_id',
                            'benefit_id',
                            'created_at',
                            'updated_at'
                        ]
                    ]
                ]
            ]
        ]);
    }

    public function test_can_update_benefit_detail()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/benefitdetail',
            [
                'name' => 'test benefit detail',
                'time_hours' => 1
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->put(
            "/api/benefitdetail/{$createdResource->id}",
            [
                'name' => 'sample benefit detail',
                'time_hours' => 1
            ]
        );
        $response->assertOk();
    }

    public function test_can_delete_benefit_detail()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->post(
            '/api/benefitdetail',
            [
                'name' => 'test benefit detail',
                'time_hours' => 1
            ]
        );
        $response->assertCreated();
        $createdResource = $response->getOriginalContent();
        $response = $this->delete("/api/benefitdetail/{$createdResource->id}");
        $response->assertInternalServerError();
    }
}
