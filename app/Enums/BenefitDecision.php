<?php

namespace App\Enums;

enum BenefitDecision: int
{
    case PENDING = 0;
    case APPROVED = 1;
    case DENIED = 2;
}
