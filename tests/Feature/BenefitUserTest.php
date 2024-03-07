<?php

namespace Tests\Feature;

use App\Events\NewBenefitUserWithoutLeaderEvent;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Event;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class BenefitUserTest extends TestCase
{

    use DatabaseMigrations;

    public function test_can_get_all_benefit_user()
    {
        Sanctum::actingAs($this->rootUser);
        $response = $this->get('/api/benefituser?userId=2&year=2010');
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
                "benefit_user" => [
                    '*' => [
                        "id",
                        "benefit_id",
                        "benefit_detail_id",
                        "user_id",
                        "benefit_begin_time",
                        "benefit_end_time",
                        "is_approved",
                        "created_at",
                        "updated_at",
                        "approved_at",
                        "approved_by",
                        "benefits" => [
                            "id",
                            "name",
                            "politicas_path",
                            "valid_id",
                            "created_at",
                            "updated_at"
                        ],
                        "benefit_detail" => [
                            "id",
                            "name",
                            "time_hours",
                            "valid_id",
                            "created_at",
                            "updated_at"
                        ],
                        "user" => [
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
                            "dependency" => [
                                "id",
                                "name",
                                "parent_id",
                                "valid_id",
                                "created_at",
                                "updated_at"
                            ]
                        ]
                    ]
                ]
            ]
        ]);
    }

    public function test_can_create_benefit_user()
    {
        Sanctum::actingAs($this->rootUser);
        Event::fake();
        $response = $this->post(
            '/api/benefituser',
            [
                'benefit_id' => 1,
                'benefit_detail_id' => 1,
                'user_id' => 1,
                'benefit_begin_time' => Carbon::create(null, 1, 1, 0, 0, 0),
                'benefit_end_time' => Carbon::create(null, 1, 1, 0, 0, 0)->addHours(1),
            ]
        );
        $createdResource = $response->getOriginalContent();
        Event::assertDispatched(NewBenefitUserWithoutLeaderEvent::class);
        $response->assertCreated();
        return $createdResource;
    }

    /**
     * @depends test_can_create_benefit_user
     */
    public function test_cant_create_duplicated_benefit_by_name()
    {
        Sanctum::actingAs($this->rootUser);
        Event::fake(); 
        $response = $this->post(
            '/api/benefituser',
            [
                'benefit_id' => 1,
                'benefit_detail_id' => 1,
                'user_id' => 1,
                'benefit_begin_time' => Carbon::create(null, 1, 1, 0, 0, 0),
                'benefit_end_time' => Carbon::create(null, 1, 1, 0, 0, 0)->addHours(1),
            ]
        );
        $response->assertCreated();
        $response = $this->post(
            '/api/benefituser',
            [
                'benefit_id' => 1,
                'benefit_detail_id' => 1,
                'user_id' => 1,
                'benefit_begin_time' => Carbon::create(null, 1, 1, 0, 0, 0),
                'benefit_end_time' => Carbon::create(null, 1, 1, 0, 0, 0)->addHours(1),
            ]
        );
        $response->assertStatus(400);
    }

    public function test_can_get_benefit_user_by_id()
    {
        Sanctum::actingAs($this->rootUser);
        Event::fake();
        $response = $this->post(
            '/api/benefituser',
            [
                'benefit_id' => 1,
                'benefit_detail_id' => 1,
                'user_id' => 1,
                'benefit_begin_time' => Carbon::now(),
                'benefit_end_time' => Carbon::now()->addHours(1),
            ]
        );
        $createdResource = $response->getOriginalContent();
        $response = $this->get("/api/benefituser/{$createdResource->id}");
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
                "benefit_user" => [
                    '*' => [
                        "id",
                        "benefit_id",
                        "benefit_detail_id",
                        "user_id",
                        "benefit_begin_time",
                        "benefit_end_time",
                        "is_approved",
                        "created_at",
                        "updated_at",
                        "approved_at",
                        "approved_by",
                        "benefits" => [
                            "id",
                            "name",
                            "politicas_path",
                            "valid_id",
                            "created_at",
                            "updated_at"
                        ],
                        "benefit_detail" => [
                            "id",
                            "name",
                            "time_hours",
                            "valid_id",
                            "created_at",
                            "updated_at"
                        ],
                        "user" => [
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
                            "dependency" => [
                                "id",
                                "name",
                                "parent_id",
                                "valid_id",
                                "created_at",
                                "updated_at"
                            ]
                        ]
                    ]
                ]
            ]
        ]);
    }

    public function test_can_update_benefit_user()
    {
        Sanctum::actingAs($this->rootUser);
        Event::fake();
        $response = $this->post(
            '/api/benefituser',
            [
                'benefit_id' => 1,
                'benefit_detail_id' => 1,
                'user_id' => 1,
                'benefit_begin_time' => Carbon::now(),
                'benefit_end_time' => Carbon::now()->addHours(1),
            ]
        );
        $createdResource = $response->getOriginalContent();
        $response = $this->put(
            "/api/benefituser/{$createdResource->id}",
            [
                'benefit_id' => 1,
                'benefit_detail_id' => 1,
                'user_id' => 1,
                'benefit_begin_time' => Carbon::now(),
                'benefit_end_time' => Carbon::now()->addHours(2),
            ]
        );
        $response->assertOk();
    }

    public function test_can_delete_benefit()
    {
        Sanctum::actingAs($this->rootUser);
        Event::fake();
        $response = $this->post(
            '/api/benefituser',
            [
                'benefit_id' => 1,
                'benefit_detail_id' => 1,
                'user_id' => 1,
                'benefit_begin_time' => Carbon::now(),
                'benefit_end_time' => Carbon::now()->addHours(1),
            ]
        );
        $createdResource = $response->getOriginalContent();
        $response = $this->delete("/api/benefituser/{$createdResource->id}");
        $response->assertOk();
    }
}
