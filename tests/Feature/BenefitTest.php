<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class BenefitTest extends TestCase
{
    use DatabaseTransactions;

    public function test_can_get_all_benefits()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->get('/api/benefit');
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                "id",
                "name",
                "politicas_path",
                "valid_id",
                "created_at",
                "updated_at",
                "benefit_detail" => [
                    '*' => [
                        "id",
                        "name",
                        "time_hours",
                        "valid_id",
                        "created_at",
                        "updated_at",
                        "pivot" => [
                            "benefit_id",
                            "benefit_detail_id",
                            "created_at",
                            "updated_at"
                        ]
                    ]
                ]
            ]
        ]);
    }

    public function test_can_create_benefit()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/benefit',
            [
                'name' => 'test benefit',
                'politicas_path' => 'test.pdf',
                'valid_id' => 1,
                'benefitDetailFormGroup' => '[]'
            ]
        );
        $response->assertCreated(201);
    }

    /**
     * @depends test_can_create_benefit
     */
    public function test_cant_create_duplicated_benefit_by_name()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->post(
            '/api/benefit',
            [
                'name' => 'test benefit',
                'politicas_path' => 'test.pdf',
                'valid_id' => 1,
                'benefitDetailFormGroup' => '[]'
            ]
        );
        $response->assertCreated(400);
    }

    public function test_can_get_benefit_by_id()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->get('/api/benefit/1');
        $response->assertOk();
        $response->assertJsonStructure([
            '*' => [
                "id",
                "name",
                "politicas_path",
                "valid_id",
                "created_at",
                "updated_at",
                "benefit_detail" => [
                    '*' => [
                        "id",
                        "name",
                        "time_hours",
                        "valid_id",
                        "created_at",
                        "updated_at",
                        "pivot" => [
                            "benefit_id",
                            "benefit_detail_id",
                            "created_at",
                            "updated_at"
                        ]
                    ]
                ]
            ]
        ]);
    }

    public function test_can_update_benefit()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->put(
            '/api/benefit/1',
            [
                'name' => 'sample benefit',
                'politicas_path' => 'sample.pdf',
                'valid_id' => 1,
                'benefitDetailFormGroup' => '[]'
            ]
        );
        $response->assertOk();
    }

    public function test_can_delete_benefit()
    {
        Sanctum::actingAs(
            $user = User::findOrFail(1)
        );
        $response = $this->delete('/api/benefit/1');
        $response->assertInternalServerError();
    }
}
