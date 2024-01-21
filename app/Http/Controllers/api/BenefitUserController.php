<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\api\Services\BenefitUserService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitUserRequest;
use App\Models\BenefitUser;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BenefitUserController extends Controller
{

    private BenefitUserService $benefitUserService;

    public function __construct(BenefitUserService $benefitUserService)
    {
        $this->benefitUserService = $benefitUserService;
        $this->middleware('checkroles:Admin', ['only' => ['destroy']]);
    }

    public function index(Request $request): JsonResponse
    {
        $userId = $request->userId;
        $year = $request->year;
        return response()->json($this->benefitUserService->getAllBenefitUser($userId, $year), 200);
    }

    public function store(CreateBenefitUserRequest $request): JsonResponse
    {
        try {
            $this->authorize('store', BenefitUser::class);
            return response()->json($this->benefitUserService->saveBenefitUser($request->validated()));
        } catch (\Illuminate\Database\QueryException $th) {
            switch ($th->errorInfo[1]) {
                case 1062:
                    return response()->json(['message' => 'No se puede guardar el beneficio porque ya existe un beneficio igual registrado.'], 400);
                    break;
                case 4025:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                case 1:
                    return response()->json(['message' => $th->errorInfo[2]], 400);
                    break;
                default:
                    return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
                    break;
            }
        } catch (Exception $e) {
            switch ($e->getCode()) {
                case 1:
                    return response()->json(['message' => $e->getMessage()], 400);
                    break;
                default:
                    return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
                    break;
            }
        }
    }

    public function show(BenefitUser $benefituser): JsonResponse
    {
        try {
            $this->authorize('show', $benefituser);
            return response()->json($this->benefitUserService->getBenefitUserByID($benefituser), 200);
        } catch (\Throwable $th) {
            return response()->json(['message', 'El beneficio solicitado no se puede mostrar porque no está asociado al usuario actual'], 403);
        }
    }

    public function update(CreateBenefitUserRequest $request, BenefitUser $benefituser): JsonResponse
    {
        try {
            $this->authorize('update', $benefituser);
            return response()->json($this->benefitUserService->updateBenefitUser($request->validated(), $benefituser), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
        } catch (Exception $e) {
            switch ($e->getCode()) {
                case 1:
                    return response()->json(['message' => $e->getMessage()], 400);
                    break;
                default:
                    return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
                    break;
            }
        }
    }

    public function destroy(BenefitUser $benefituser): JsonResponse
    {
        try {
            $this->authorize('destroy', $benefituser);
            $this->benefitUserService->deleteBenefitUser($benefituser);
            return response()->json(['message' => 'Beneficio del empleado eliminado'], 200);
        } catch (\Illuminate\Database\QueryException $th) {
            return response()->json($th, 500);
        }
    }

    public function exportDetail(Request $request): void
    {
        $this->benefitUserService->exportOwnBenefits($request);
    }

    public function indexNonApproved(Request $request): JsonResponse
    {
        $userId = $request->userId;
        return response()->json($this->benefitUserService->getAllBenefitUserNonApproved($userId), 200);
    }

    public function indexCollaboratorsNonApproved(): JsonResponse
    {
        return response()->json($this->benefitUserService->getAllBenefitCollaboratorsNonApproved(request()), 200);
    }

    public function indexCollaborators(): JsonResponse
    {
        return response()->json($this->benefitUserService->getAllBenefitCollaborators(request()), 200);
    }

    public function decideBenefitUser(Request $request): JsonResponse
    {
        try {
            $benefitUser = BenefitUser::find($request->data)->first();
            $this->authorize('decideBenefitUser', $benefitUser);
            return response()->json($this->benefitUserService->decideBenefitUser($request->cmd, $benefitUser), 200);
        } catch (\Illuminate\Database\QueryException $th) {
            return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
        } catch (Exception $e) {
            switch ($e->getCode()) {
                case 1:
                    return response()->json(['message' => $e->getMessage()], 400);
                    break;
                default:
                    return response()->json(['message' => 'Ha ocurrido un error interno, contacte con el administrador'], 400);
                    break;
            }
        }
    }
}
