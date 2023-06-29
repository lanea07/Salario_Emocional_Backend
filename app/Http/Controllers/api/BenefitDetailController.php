<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitDetailRequest;
use App\Models\BenefitDetail;

class BenefitDetailController extends Controller
{

    public function __construct()
    {
        $this->middleware('checkroles:Admin');
    }

    public function index()
    {
        $this->authorize('index', auth()->user());
        return BenefitDetail::with(['benefit'])->get();
    }


    public function store(CreateBenefitDetailRequest $request)
    {
        $newBenefitDetail = $request->validated();
        $newBenefitDetail = BenefitDetail::create($newBenefitDetail);
        return response($newBenefitDetail, 201);
    }


    public function show(BenefitDetail $benefitdetail)
    {
        return $benefitdetail->with(['benefit'])->where('id', $benefitdetail->id)->get();
    }


    public function update(BenefitDetail $benefitdetail, CreateBenefitDetailRequest $request)
    {
        $this->authorize('update', $benefitdetail);
        $benefitdetail->update($request->validated());
        // broadcast(new DirectorioUpdate($benefitdetail));
        return response($benefitdetail, 200);
    }


    public function destroy(BenefitDetail $benefitdetail)
    {
        try {
            $this->authorize('destroy', $benefitdetail);
            $benefitdetail->delete();
            return response(['msg' => 'Detalle de Beneficio eliminado'], 200);
        } catch (\Throwable $th) {
            return response($th, 500);
        }
    }
}
