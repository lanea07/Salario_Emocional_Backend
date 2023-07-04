<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitUserRequest;
use App\Mail\BenefitUserCreated;
use App\Models\BenefitUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class BenefitUserController extends Controller
{

    public function __construct()
    {
        $this->middleware('checkroles:Admin', ['only' => ['destroy']]);
    }

    public function index(Request $request)
    {
        $userId = $request->userId;
        $year = $request->year;
        return User::with(['benefit_user' => function ($q) use ($year) {
            $q->whereYear('benefit_begin_time', $year);
        }, 'benefit_user.benefits', 'benefit_user.benefit_detail'])
            ->where(function ($q) use ($userId) {
                $q->where('leader', $userId)
                    ->orWhere('id', $userId);
            })
            ->get();
    }


    public function store(CreateBenefitUserRequest $request)
    {
        $newBenefitUser = $request->validated();
        // $newBenefitUser = BenefitUser::create($newBenefitUser);
        // $newBenefitUser = BenefitUser::with(['user', 'benefits', 'benefit_detail'])->find($newBenefitUser->id);
        $newBenefitUser = BenefitUser::with(['user', 'benefits', 'benefit_detail'])->find(1709);
        // Mail::to('juan.soto@flamingo.com.co')
        //     ->send(new BenefitUserCreated($newBenefitUser));
        Mail::to('juancamilo.soto@outlook.com')
            ->send(new BenefitUserCreated($newBenefitUser));
        return response($newBenefitUser, 201);
    }


    public function show(User $benefituser, Request $request)
    {
        $year = $request->year;
        // User::with(['benefit_user.benefits', 'benefit_user.benefit_detail'])
        //     ->wherehas('benefit_user', function ($q) use ($year) {
        //         $q->whereYear('benefit_begin_time', $year);
        //     })
        //     ->where('id', $benefituser->id)
        //     ->get();
        return User::with(['benefit_user' => function ($q) use ($year) {
            $q->whereYear('benefit_begin_time', $year);
        }, 'benefit_user.benefits', 'benefit_user.benefit_detail'])
            ->where('id', $benefituser->id)
            ->get();
    }


    public function update(BenefitUser $benefituser, CreateBenefitUserRequest $request)
    {
        $this->authorize('update', $benefituser);
        $benefituser->update($request->validated());
        // broadcast(new DirectorioUpdate($benefituser));
        return response($benefituser, 200);
    }


    public function destroy(BenefitUser $benefituser)
    {
        try {
            $this->authorize('destroy', $benefituser);
            $benefituser->delete();
            return response(['msg' => 'Beneficio del empleado eliminado'], 200);
        } catch (\Throwable $th) {
            return response($th, 500);
        }
    }
}
