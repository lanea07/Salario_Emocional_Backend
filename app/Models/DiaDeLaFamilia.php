<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;
use Carbon\Carbon;
use Exception;

class DiaDeLaFamilia extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Día de la Familia');
    }

    public function canCreate(array $requestedBenefitData)
    {
        $month = Carbon::now()->month;
        $year = Carbon::now()->year;
        switch (true) {
            case ($month >= 1 && $month <= 6):
                $initialDate = Carbon::create($year, '01', '01', '00', '00', '00')->format('Y-m-d H:i:s');
                $finalDate =  Carbon::create($year, '06', '30', '23', '59', '59')->format('Y-m-d H:i:s');
                break;
            case ($month >= 7 && $month <= 12):
                $initialDate = Carbon::create($year, '07', '01', '00', '00', '00')->format('Y-m-d H:i:s');
                $finalDate =  Carbon::create($year, '12', '31', '23', '59', '59')->format('Y-m-d H:i:s');
                break;
        }

        $claimed = BenefitUser::where(function ($q) use ($requestedBenefitData, $initialDate, $finalDate) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', '=', $requestedBenefitData['user_id']);
            $q->whereBetween('benefit_begin_time', [$initialDate, $finalDate]);
        })->get();
        if (!$claimed->isEmpty()) {
            throw new Exception("El beneficio que está intentando registrar ya fue utilizado este semestre.", 1);
        }
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        $month = Carbon::parse($requestedBenefitData['benefit_begin_time'])->month;
        $year = Carbon::parse($requestedBenefitData['benefit_begin_time'])->year;
        switch (true) {
            case ($month >= 1 && $month <= 6):
                $initialDate = Carbon::create($year, '01', '01', '00', '00', '00')->format('Y-m-d H:i:s');
                $finalDate =  Carbon::create($year, '06', '30', '23', '59', '59')->format('Y-m-d H:i:s');
                break;
            case ($month >= 7 && $month <= 12):
                $initialDate = Carbon::create($year, '07', '01', '00', '00', '00')->format('Y-m-d H:i:s');
                $finalDate =  Carbon::create($year, '12', '31', '23', '59', '59')->format('Y-m-d H:i:s');
                break;
        }

        $claimed = BenefitUser::where(function ($q) use ($requestedBenefitData, $initialDate, $finalDate) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', '=', $requestedBenefitData['user_id']);
            $q->whereBetween('benefit_begin_time', [$initialDate, $finalDate]);
            $q->is_approved();
        })->get();
        if (!$claimed->isEmpty()) {
            throw new Exception("El beneficio que está intentando registrar ya fue utilizado este semestre.", 1);
        }
    }
}
