<?php

namespace App\Http\Controllers\api\Services;

use App\Models\BenefitDetail;
use Illuminate\Database\Eloquent\Collection;

class BenefitDetailService
{

    /**
     * Return all benefit details
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllBenefitDetail(): Collection
    {
        return BenefitDetail::with(['benefit'])->get();
    }

    /**
     * Store a new benefit detail
     * 
     * @param array $benefitDetailData
     * 
     * @return \App\Models\BenefitDetail
     */
    public function saveBenefitDetail(array $benefitDetailData): BenefitDetail
    {
        return BenefitDetail::create($benefitDetailData);
    }

    /**
     * Return a benefit detail by id
     * 
     * @param \App\Models\BenefitDetail $benefitDetail
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getBenefitDetailByID(BenefitDetail $benefitDetail): Collection
    {
        return $benefitDetail->with(['benefit'])->where('id', $benefitDetail->id)->get();
    }

    /**
     * Update a benefit detail
     * 
     * @param array $benefitDetailData
     * @param \App\Models\BenefitDetail $benefitdetail
     * 
     * @return \App\Models\BenefitDetail
     */
    public function updateBenefitDetail(array $benefitDetailData, BenefitDetail $benefitdetail): BenefitDetail
    {
        $benefitdetail->update($benefitDetailData);
        return $benefitdetail;
    }

    /**
     * Delete a benefit detail
     * 
     * @param \App\Models\BenefitDetail $benefitDetail
     * 
     * @return void
     */
    public function deleteBenefitDetail(BenefitDetail $benefitDetail): void
    {
        throw new \Exception('No se puede eliminar una configuración de beneficio');
    }
}
