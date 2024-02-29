<?php

namespace App\Settings;

use App\Models\Benefit;
use LaravelPropertyBag\Settings\ResourceConfig;

class BenefitSettings extends ResourceConfig
{

    /**
     * Return a collection of registered settings.
     *
     * @return Collection
     */
    public function registeredSettings()
    {
        $allBenefits = [];
        array_push($allBenefits, 'Ninguno');
        $allBenefits = array_merge($allBenefits, Benefit::pluck('name')->all());

        /**
         * The settings that are allowed to be set for this resource.
         * If new settings are added, make sure to also include settings validation in Benefit model canCreate and canUpdate methods.
         */
        return collect(['allowed_repeat_frecuency' => [
                'allowed' => ['no aplica', 'mensual', 'trimestral', 'cuatrimestral', 'semestral', 'anual'],
                'default' => 'no aplica'
            ],
            'allowed_repeat_interval' => [
                'allowed' => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                'default' => 0
            ],
            'allowed_to_update_approved_benefits' => [
                'allowed' => [true, false],
                'default' => false
            ],
            'cant_combine_with' => [
                'allowed' => $allBenefits,
                'default' => 'ninguno'
            ],
            'is_auto_approve_new' => [
                'allowed' => [true, false],
                'default' => false
            ],
            'is_auto_approve_update' => [
                'allowed' => [true, false],
                'default' => false
            ],
            'max_allowed_hours' => [
                'allowed' => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                'default' => 0
            ],
            'uses_barchart' => [
                'allowed' => [true, false],
                'default' => false
            ],
            'uses_doughnutchart' => [
                'allowed' => [true, false],
                'default' => false
            ],
        ]);
    }
}
