<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BenefitUser extends Model
{
    use HasFactory;

    protected $table = 'benefit_user';

    protected $fillable = [
        'benefit_id',
        'benefit_detail_id',
        'user_id',
        'benefit_begin_time',
        'benefit_end_time'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function benefits()
    {
        return $this->belongsTo(Benefit::class, 'benefit_id', 'id');
    }

    public function benefit_detail()
    {
        return $this->belongsTo(BenefitDetail::class);
    }
}
