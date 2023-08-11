<?php

namespace App\Http\Controllers\api\Services;

use App\Models\Position;
use Illuminate\Database\Eloquent\Collection;

class PositionService
{

    public function getAllPositions(): Collection
    {
        return Position::all();
    }

    public function savePosition(array $positionData): Position
    {
        return Position::create($positionData);
    }

    public function getPositionByID(Position $position): Position
    {
        return $position;
    }

    public function updatePosition(array $positionData, Position $position): Position
    {
        $position->update($positionData);
        return $position;
    }

    public function deletePosition(Position $position): void
    {
        $position->delete();
    }
}
