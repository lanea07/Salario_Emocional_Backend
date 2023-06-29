<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBenefitRequest;
use App\Models\Benefit;
use App\Models\BenefitDetail;

class BenefitController extends Controller
{

    public function __construct()
    {
        $this->middleware('checkroles:Admin', ['except' => ['index', 'show']]);
    }

    public function index()
    {
        return Benefit::with(['benefit_detail'])->get();
    }


    public function store(CreateBenefitRequest $request)
    {
        $newBenefit = $request->validated();

        $benefitsToAsign = array_filter($newBenefit['benefitDetailFormGroup'], function ($benefit) {
            return $benefit === true;
        });
        $benefitsToAsign = array_keys($benefitsToAsign);
        $benefitsToAsign = BenefitDetail::whereIn('id', $benefitsToAsign)->get();


        $newBenefit = Benefit::create($newBenefit);
        $newBenefit->benefitDetail()->attach($benefitsToAsign);
        return response($newBenefit, 201);
    }


    public function show(Benefit $benefit)
    {
        return $benefit->with(['benefit_detail'])->where('id', $benefit->id)->get();
    }


    public function update(Benefit $benefit, CreateBenefitRequest $request)
    {
        $this->authorize('update', $benefit);
        $validated = $request->validated();
        $benefitsToAsign = array_filter($validated['benefitDetailFormGroup'], function ($benefit) {
            return $benefit === true;
        });
        $benefitsToAsign = array_keys($benefitsToAsign);
        $benefitsToAsign = Benefit::whereIn('id', $benefitsToAsign)->get();

        $benefit->update($validated);
        $benefit->benefitDetail()->sync($benefitsToAsign);
        // broadcast(new DirectorioUpdate($benefit));
        return response($benefit, 200);
    }


    public function destroy(Benefit $benefit)
    {
        try {
            $this->authorize('destroy', $benefit);
            $benefit->delete();
            return response(['msg' => 'Beneficio eliminado'], 200);
        } catch (\Throwable $th) {
            return response($th, 500);
        }
    }
}
