<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;
use Exception;

class MiBancoDeHoras extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Mi Banco de Horas');
    }

    public function canCreate(array $requestedBenefitData)
    {
        $hasViernesCorto = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $bancoHoras = ViernesCorto::first();
            $q->where('benefit_id', $bancoHoras->id);
            $q->whereMonth('benefit_begin_time', date("m", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->is_approved();
        })->get();
        if (!$hasViernesCorto->isEmpty()) {
            throw new Exception("Este mes ya te fue aprobado el Viernes Corto, no se puede mezclar Banco de Horas con Viernes Corto", 1);
        }

        $requestedTime = BenefitDetail::find($requestedBenefitData['benefit_detail_id'])->time_hours;
        $total_time_hours = BenefitUser::with(['benefit_detail'])
            ->where(function ($q) use ($requestedBenefitData) {
                $q->where('user_id', '=', $requestedBenefitData['user_id']);
                $q->where('benefit_id', '=', $this->id);
            $q->whereMonth('benefit_begin_time', date("m", strtotime($requestedBenefitData['benefit_begin_time'])));
                $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->is_approved();
            })->get()->pluck('benefit_detail.time_hours')->sum();
        if ($total_time_hours >= 8) {
            throw new Exception("El beneficio que estás intentando registrar ya tiene utilizado todas las horas disponibles.", 1);
        }
        if ($total_time_hours + $requestedTime > 8) {
            throw new Exception("El beneficio que estás intentando registrar supera las horas disponibles.", 1);
        }
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        $actualTime = BenefitDetail::find($benefitUser['benefit_detail_id'])->time_hours;
        $requestedTime = BenefitDetail::find($requestedBenefitData['benefit_detail_id'])->time_hours;
        $total_time_hours = BenefitUser::with(['benefit_detail'])
            ->where(function ($q) use ($requestedBenefitData) {
            $q->where('user_id', '=', $requestedBenefitData['user_id']);
            $q->where('benefit_id', '=', $this->id);
            $q->whereMonth('benefit_begin_time', date("m", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->is_approved();
            })
            ->get()->pluck('benefit_detail.time_hours')->sum();
        if (($total_time_hours - $actualTime) + $requestedTime > 8) {
            throw new Exception("El beneficio que estás intentando actualizar supera las horas disponibles.", 1);
        }
    }
}
