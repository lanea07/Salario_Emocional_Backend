<?php

namespace App\Http\Controllers\api\Services;

use App\Models\BenefitUser;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class AdminService
{
    public function getAllBenefits(Request $request): Collection
    {
        return BenefitUser::with(['user', 'user.dependency', 'benefits', 'benefit_detail'])
            ->when($request->year, function ($q) use ($request) {
                return $q->whereYear('created_at', $request->year);
            })
            ->when($request->benefit_id, function ($q) use ($request) {
                return $q->where('benefit_id', $request->benefit_id);
            })
            ->when($request->user_id, function ($q) use ($request) {
                return $q->where('user_id', $request->user_id);
            })
            ->when($request->dependency_id, function ($q) use ($request) {
                return $q->whereRelation('user', function ($q) use ($request) {
                    $q->where('dependency_id', $request->dependency_id);
                });
            })
            ->when($request->is_approved, function ($q) use ($request) {
                return $q->where('is_approved', $request->is_approved);
            })
            ->get();
    }

    public function getAllGroupedBenefits(Request $request)
    {
        return BenefitUser::with([
            'user' => function ($q) {
                $q->select('id', 'name', 'dependency_id');
            },
            'user.dependency' => function ($q) {
                $q->select('id', 'name');
            },
            'benefits' => function ($q) {
                $q->select('id', 'name');
            },
        ])
            ->when($request->year, function ($q) use ($request) {
                return $q->whereYear('created_at', $request->year);
            })
            ->when($request->benefit_id, function ($q) use ($request) {
                return $q->where('benefit_id', $request->benefit_id);
            })
            ->when($request->user_id, function ($q) use ($request) {
                return $q->where('user_id', $request->user_id);
            })
            ->when($request->dependency_id, function ($q) use ($request) {
                return $q->whereRelation('user', function ($q) use ($request) {
                    $q->where('dependency_id', $request->dependency_id);
                });
            })
            ->when($request->is_approved, function ($q) use ($request) {
                return $q->where('is_approved', $request->is_approved);
            })
            ->get([
                'id',
                'benefit_id',
                'user_id',
                'created_at',
                'benefit_begin_time',
            ])->groupBy('benefits.name');
    }
}
