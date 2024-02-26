<?php

namespace App\Models;

use App\Interfaces\IBenefitValidation;
use Carbon\Carbon;
use Exception;

class ViernesCorto extends Benefit implements IBenefitValidation
{
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)
            ->where('name', 'Viernes Corto');
    }

    public function canCreate(array $requestedBenefitData)
    {
        $hasBancodeHoras = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $bancoHoras = MiBancoDeHoras::first();
            $q->where('benefit_id', $bancoHoras->id);
            $q->whereMonth('benefit_begin_time', date("m", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->is_approved();
        })->get();
        if (!$hasBancodeHoras->isEmpty()) {
            throw new Exception("Este mes ya te fue aprobado un banco de horas, no se puede mezclar Viernes Corto con Banco de Horas", 1);
        }
        $shortFriday = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', $requestedBenefitData['user_id']);
            $q->whereMonth('benefit_begin_time', date("m", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->is_approved();
        })->get();
        if (!$shortFriday->isEmpty()) {
            throw new Exception("El beneficio que está intentando registrar ya fue utilizado en este mes.", 1);
        }
    }

    public function canUpdate(array $requestedBenefitData, BenefitUser $benefitUser = null)
    {
        $shortFriday = BenefitUser::where(function ($q) use ($requestedBenefitData) {
            $q->where('benefit_id', $requestedBenefitData['benefit_id']);
            $q->where('user_id', $requestedBenefitData['user_id']);
            $q->whereMonth('benefit_begin_time', date("m", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->whereYear('benefit_begin_time', date("Y", strtotime($requestedBenefitData['benefit_begin_time'])));
            $q->is_approved();
        })->get();
        if (!$shortFriday->isEmpty()) {
            $existingFridayMonth = Carbon::parse($shortFriday->first()->benefit_begin_time)->month;
            $requestedFridayMonth = Carbon::parse(strtotime($requestedBenefitData['benefit_begin_time']))->month;
            if ($existingFridayMonth === $requestedFridayMonth) {
                throw new Exception("El beneficio que está intentando actualizar ya fue utilizado en este mes.", 1);
            }
        }
    }
}
