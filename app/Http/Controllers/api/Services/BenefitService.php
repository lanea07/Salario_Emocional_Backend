<?php

namespace App\Http\Controllers\api\Services;

use App\Models\Benefit;
use App\Models\BenefitDetail;
use Illuminate\Database\Eloquent\Collection;

class BenefitService
{

    public function getAllBenefits(): Collection
    {
        return Benefit::with('benefit_detail')->get();
    }

    public function saveBenefit(array $benefitData): Benefit
    {
        $benefitsToAsign = array_filter($benefitData['benefitDetailFormGroup'], function ($benefit) {
            return $benefit === true;
        });
        $benefitsToAsign = array_keys($benefitsToAsign);
        $benefitsToAsign = BenefitDetail::whereIn('id', $benefitsToAsign)->get();
        $benefit = Benefit::create($benefitData);
        $benefit->benefit_detail()->attach($benefitsToAsign);
        return $benefit;
    }

    public function getBenefitByID(Benefit $benefit): Collection
    {
        return $benefit->with(['benefit_detail'])->where('id', $benefit->id)->get();
    }

    public function updateBenefit(array $benefitData, Benefit $benefit): Benefit
    {
        $benefitsToAsign = array_filter($benefitData['benefitDetailFormGroup'], function ($benefit) {
            return $benefit === true;
        });
        $benefitsToAsign = array_keys($benefitsToAsign);
        $benefitsToAsign = BenefitDetail::whereIn('id', $benefitsToAsign)->get();

        $benefit->update($benefitData);
        $benefit->benefit_detail()->sync($benefitsToAsign);
        return $benefit;
    }

    public function deleteBenefit(Benefit $benefit): void
    {
        $benefit->delete();
    }
}
