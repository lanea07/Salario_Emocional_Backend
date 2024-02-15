<?php

namespace App\Http\Controllers\api\Services;

use App\Models\Benefit;
use App\Models\BenefitDetail;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;

class BenefitService
{

    public function getAllBenefits(): Collection
    {
        return Benefit::with('benefit_detail')
        ->orderBy('name', 'asc')
        ->get();
    }

    public function saveBenefit(array $benefitData)//: Benefit
    {
        // Convert BenefitDetailFormGroup to array
        $benefitData['benefitDetailFormGroup'] = json_decode($benefitData['benefitDetailFormGroup'], true);
        $benefitsToAsign = array_filter($benefitData['benefitDetailFormGroup'], function ($benefit) {
            return $benefit === true;
        });
        $benefitsToAsign = array_keys($benefitsToAsign);

        // Save request File
        if (request()->file('filePoliticas')) {
            $path = request()->file('filePoliticas')->store('politics', 'google');
            $benefitData['politicas_path'] = $path;
        }
        $benefitsToAsign = BenefitDetail::whereIn('id', $benefitsToAsign)->get();
        $benefit = Benefit::create([
            'name' => $benefitData['name'],
            'politicas_path' => isset($benefitData['politicas_path']) ?  $benefitData['politicas_path'] : null,
        ]);
        $benefit->benefit_detail()->attach($benefitsToAsign);
        return $benefit;
    }

    public function getBenefitByID(Benefit $benefit): Collection
    {
        return $benefit->with(['benefit_detail'])->where('id', $benefit->id)->get();
    }

    public function updateBenefit(array $benefitData, Benefit $benefit): Benefit
    {
        // Convert BenefitDetailFormGroup to array
        $benefitData['benefitDetailFormGroup'] = json_decode($benefitData['benefitDetailFormGroup'], true);
        $benefitsToAsign = array_filter($benefitData['benefitDetailFormGroup'], function ($benefit) {
            return $benefit === true;
        });
        $benefitsToAsign = array_keys($benefitsToAsign);
        $benefitsToAsign = BenefitDetail::whereIn('id', $benefitsToAsign)->get();

        // Save request File
        if (request()->file('filePoliticas')) {
            if ($benefit->politicas_path) {
                $deleted = Storage::disk('google')->delete($benefit->getAttributes()['politicas_path']);
            }
            $path = request()->file('filePoliticas')->store('politics', 'google');
            $benefitData['politicas_path'] = $path;
        }
        $benefit->update($benefitData);
        $benefit->benefit_detail()->sync($benefitsToAsign);
        return $benefit;
    }

    public function deleteBenefit(Benefit $benefit): void
    {
        $benefit->delete();
    }

    public function getAllEnabledBenefits(): Collection
    {
        return Benefit::with('benefit_detail')
            ->is_valid()
            ->orderBy('name', 'asc')
            ->get();
    }

}
