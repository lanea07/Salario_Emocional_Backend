<?php

namespace App\Http\Controllers\api;

use App\Services\BenefitUserService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitUserRequest;
use App\Models\BenefitUser;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;

class BenefitUserController extends Controller
{

    public function __construct(private BenefitUserService $benefitUserService)
    {
        $this->middleware('checkroles:Admin', ['only' => ['destroy']]);
    }

    /**
     * Return all benefit users
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $userId = $request->userId;
        $year = $request->year;
        return response()->json($this->benefitUserService->getAllBenefitUser($userId, $year), 200);
    }

    /**
     * Store a new benefit user
     * 
     * @param \App\Http\Requests\CreateBenefitUserRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateBenefitUserRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', BenefitUser::class);
            return response()->json($this->benefitUserService->saveBenefitUser($request->validated()), 201);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Return a benefit user by ID
     * 
     * @param \App\Models\BenefitUser $benefituser
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(BenefitUser $benefituser): JsonResponse
    {
        try {
            $this->authorize('show', $benefituser);
            return response()->json($this->benefitUserService->getBenefitUserByID($benefituser), 200);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Update a benefit user
     * 
     * @param \App\Http\Requests\CreateBenefitUserRequest $request
     * @param \App\Models\BenefitUser $benefituser
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateBenefitUserRequest $request, BenefitUser $benefituser): JsonResponse
    {
        try {
            $this->authorize('update', $benefituser);
            return response()->json($this->benefitUserService->updateBenefitUser($request->validated(), $benefituser), 200);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Delete a benefit user
     * 
     * @param \App\Models\BenefitUser $benefituser
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(BenefitUser $benefituser): JsonResponse
    {
        try {
            $this->authorize('destroy', $benefituser);
            $this->benefitUserService->deleteBenefitUser($benefituser);
            return response()->json(['message' => 'Beneficio del empleado eliminado'], 200);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    /**
     * Generates a mail with user benefits data
     * 
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    public function exportDetail(Request $request): void
    {
        $this->benefitUserService->exportBenefits($request);
    }

    /**
     * Return all users benefits non approved
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexNonApproved(Request $request): JsonResponse
    {
        $userId = $request->userId;
        return response()->json($this->benefitUserService->getAllBenefitUserNonApproved($userId), 200);
    }

    /**
     * Return all benefit collaborators non approved
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexCollaboratorsNonApproved(): JsonResponse
    {
        return response()->json($this->benefitUserService->getAllBenefitCollaboratorsNonApproved(request()), 200);
    }

    /**
     * Return all benefit collaborators
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexCollaborators(): JsonResponse
    {
        return response()->json($this->benefitUserService->getAllBenefitCollaborators(request()), 200);
    }

    /**
     * Applies a decision to a benefit user
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function decideBenefitUser(Request $request): JsonResponse
    {
        try {
            $benefitUser = BenefitUser::find($request->data['id']);
            $this->authorize('decideBenefitUser', $benefitUser);
            return response()->json($this->benefitUserService->decideBenefitUser($request->cmd, $request->decision_comment, $benefitUser), 200);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function showByUserID(User $user, int $year): JsonResponse
    {
        return response()->json($this->benefitUserService->getBenefitUserByUserID($user, $year), 200);
    }
}
