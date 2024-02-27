<?php

namespace App\Services;

use App\Models\Benefit;
use App\Models\BenefitDetail;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Collection as SupportCollection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class BenefitService
{

    /**
     * Return all benefits
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllBenefits(): Collection
    {
        return Benefit::with(['benefit_detail'])
            ->orderBy('name', 'asc')
            ->get();
    }

    /**
     * Store a new benefit
     * 
     * @param array $benefitData
     * @return Benefit
     */
    public function saveBenefit(array $benefitData): Benefit
    {
        $created = DB::transaction(function () use ($benefitData) {
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
        });
        return $created;
    }

    /**
     * Return a benefit by ID
     * 
     * @param Benefit $benefit
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getBenefitByID(Benefit $benefit): Collection
    {
        return $benefit->with(['benefit_detail'])->where('id', $benefit->id)->get();
    }

    /**
     * Update a benefit
     * 
     * @param array $benefitData
     * @param Benefit $benefit
     * @return Benefit
     */
    public function updateBenefit(array $benefitData, Benefit $benefit): Benefit
    {
        $updated = DB::transaction(function () use ($benefitData, $benefit) {
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
        });
        return $updated;
    }

    /**
     * Delete a benefit
     * 
     * @param Benefit $benefit
     * @return void
     * @throws \Exception
     */
    public function deleteBenefit(Benefit $benefit): void
    {
        throw new \Exception('No se puede eliminar un beneficio');
    }

    /**
     * Return all valid benefits
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllEnabledBenefits(): Collection
    {
        return Benefit::with('benefit_detail')
            ->is_valid()
            ->orderBy('name', 'asc')
            ->get();
    }

    /**
     * Returns all available preferences for a default Benefit model
     * 
     * @return Illuminate\Support\Collection
     */
    public function getAllAvailablePreferences(): SupportCollection
    {
        return collect([(new Benefit)->allowedSetting()]);;
    }

    /**
     * Returns all preferences for the authenticated Benefit
     * 
     * @param Benefit $benefit
     * @return Illuminate\Support\Collection
     */
    public function benefitPreferences(Benefit $benefit): SupportCollection
    {
        return collect([$benefit->allSettings()]);
    }

    /**
     * Store a set of settings for a benefit
     *
     * @param  Benefit  $benefit
     * @param  array  $preferences
     * @return void
     */
    public function savePreferences(Benefit $benefit, array $preferences): array
    {
        $updated = DB::transaction(function () use ($benefit, $preferences) {
            $benefit->setSettings($preferences);
            return ['message' => 'Preferencias actualizadas'];
        });
        return $updated;
    }
}
