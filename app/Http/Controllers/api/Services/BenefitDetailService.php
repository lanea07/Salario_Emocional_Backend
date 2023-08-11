<?php

namespace App\Http\Controllers\api\Services;

use App\Models\BenefitDetail;
use Illuminate\Database\Eloquent\Collection;

class BenefitDetailService
{

    public function getAllBenefitDetail(): Collection
    {
        return BenefitDetail::all();
    }

    public function saveBenefitDetail(array $benefitDetailData): BenefitDetail
    {
        return BenefitDetail::create($benefitDetailData);
    }

    public function getBenefitDetailByID(BenefitDetail $benefitDetail): Collection
    {
        return $benefitDetail->with(['benefit'])->where('id', $benefitDetail->id)->get();
    }

    public function updateBenefitDetail(array $benefitDetailData, BenefitDetail $benefitdetail): BenefitDetail
    {
        $benefitdetail->update($benefitDetailData);
        return $benefitdetail;
    }

    public function deleteBenefitDetail(BenefitDetail $benefitDetail): void
    {
        $benefitDetail->delete();
    }
}
