<?php

namespace App\Settings;

use LaravelPropertyBag\Settings\ResourceConfig;

class BenefitSettings extends ResourceConfig
{
    /**
     * Registered settings for the user. Register settings by setting name. Each
     * setting must have an associative array set as its value that contains an
     * array of 'allowed' values and a single 'default' value.
     *
     * @var array
     */
    protected $registeredSettings = [
        'is_auto_approve_new' => [
            'allowed' => [true, false],
            'default' => false
        ],
        'is_auto_approve_update' => [
            'allowed' => [true, false],
            'default' => false
        ],
        'allowed_repeat_frecuency' => [
            'allowed' => ['Diario', 'Semanal', 'Mensual', 'Trimestral', 'Cuatrimestral', 'Semestral', 'Anual'],
            'default' => 'Diario'
        ],
        'allowed_repeat_interval' => [
            'allowed' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            'default' => 1
        ],
        'cant_combine_with' => [
            'allowed' => ':any:',
            'default' => 'Ninguno'
        ],
        'uses_barchart' => [
            'allowed' => [true, false],
            'default' => false
        ],
        'uses_doughnutchart' => [
            'allowed' => [true, false],
            'default' => false
        ],
    ];
}
