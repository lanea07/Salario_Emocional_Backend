<?php

namespace App\Exports;

use App\Models\User;
use Illuminate\Support\Arr;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class BenefitUserExport implements FromCollection, WithMapping, WithHeadings
{

    protected $year;
    protected $user_id;
    protected $isAuthenticatedUserAdmin;

    public function __construct(array $data)
    {
        $this->year = $data['year'];
        $this->user_id = $data['user_id'];
        $this->isAuthenticatedUserAdmin = $data['isAuthenticatedUserAdmin'];
    }

    public function headings(): array
    {
        return [
            'Colaborador',
            'Beneficio',
            'Detalle',
            'Fecha de inicio',
            'Finaliza'
        ];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        if ($this->isAuthenticatedUserAdmin) {
            $user =  User::with(
                [
                    'benefit_user' => function ($q) {
                        $q->whereYear('benefit_begin_time', $this->year);
                        $q->orderBy('benefit_begin_time');
                    },
                    'benefit_user.benefits',
                    'benefit_user.benefit_detail'
                ]
            )->get();
        } else {
            $user =  User::with(
                [
                    'benefit_user' => function ($q) {
                        $q->whereYear('benefit_begin_time', '=', $this->year);
                        $q->orderBy('benefit_begin_time');
                    },
                    'benefit_user.benefits',
                    'benefit_user.benefit_detail'
                ]
            )->where('id', '=', $this->user_id)->get();
        }
        return $user;
    }

    public function map($user): array
    {
        $data = [];
        $flatten = Arr::flatten($user->benefit_user, 2);
        foreach ($flatten as $benefit_user) {
            $array = [
                $user->name,
                empty($benefit_user->benefits) ? null :  $benefit_user->benefits->name,
                empty($benefit_user->benefit_detail) ? null : $benefit_user->benefit_detail->name,
                empty($benefit_user->benefit_begin_time) ? null : \Carbon\Carbon::parse($benefit_user->benefit_begin_time)->format('d/m/Y'),
                empty($benefit_user->benefit_end_time) ? null : \Carbon\Carbon::parse($benefit_user->benefit_end_time)->format('d/m/Y')
            ];
            array_push($data, $array);
        }
        return $data;
    }
}
