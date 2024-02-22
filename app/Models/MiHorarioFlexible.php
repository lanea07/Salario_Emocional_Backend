<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;
use Exception;

class MiHorarioFlexible extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Mi Horario Flexible');
    }

    public function canCreate(array $requestedBenefitData)
    {
        $claimedSchedule = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', '=', $requestedBenefitData['user_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
        })->get();
        if (!$claimedSchedule->isEmpty()) {
            $claimedSchedule->each(function ($item, $key) use ($requestedBenefitData) {
                if ($this->date_quarter($requestedBenefitData['benefit_begin_time']) === $this->date_quarter($item->benefit_begin_time)) {
                    throw new Exception("Este beneficio ya está activo para este trimestre.", 1);
                }
            });
        }
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        $claimedSchedule = BenefitUser::where(function ($q) use ($requestedBenefitData, $benefitUser) {
            $q->where('id', '<>', $benefitUser->id);
            $q->where('user_id', '=', $requestedBenefitData['user_id']);
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->is_approved();
        })->get();
        if (!$claimedSchedule->isEmpty()) {
            $claimedSchedule->each(function ($item, $key) use ($requestedBenefitData) {
                if ($this->date_quarter($requestedBenefitData['benefit_begin_time']) === $this->date_quarter($item->benefit_begin_time)) {
                    throw new Exception("Este beneficio ya está activo para este trimestre.", 1);
                }
            });
        }
    }

    /**
     * Returns the quarter of the year for the input date
     * 
     * @param string $date
     * @return int 
     */
    private function date_quarter(string $date): int
    {
        $month = date('n', strtotime($date));

        if ($month <= 3) return 1;
        if ($month <= 6) return 2;
        if ($month <= 9) return 3;
        return 4;
    }
}
