<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class BenefitUserExport implements FromCollection, WithMapping, WithHeadings
{

    protected $year;
    protected $user_id;

    public function __construct(array $data)
    {
        $this->year = $data['year'];
        $this->user_id = $data['user_id'];
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
        $user = User::find($this->user_id);
        if ($user->isAdmin()) {
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
        $data = [
            $user->name,
            empty($user->benefit_user[0]->benefits) ? null :  $user->benefit_user[0]->benefits->name,
            empty($user->benefit_user[0]->benefit_detail) ? null : $user->benefit_user[0]->benefit_detail->name,
            empty($user->benefit_user[0]->benefit_begin_time) ? null : \Carbon\Carbon::parse($user->benefit_user[0]->benefit_begin_time)->format('d/m/Y'),
            empty($user->benefit_user[0]->benefit_end_time) ? null : \Carbon\Carbon::parse($user->benefit_user[0]->benefit_end_time)->format('d/m/Y')
        ];
        return $data;
    }
}
