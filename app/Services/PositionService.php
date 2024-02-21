<?php

namespace App\Services;

use App\Models\Position;
use Illuminate\Database\Eloquent\Collection;

class PositionService
{

    /**
     * Get all positions
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function getAllPositions(): Collection
    {
        return Position::where('id', '<>', 1)->get();
    }

    /**
     * Save a new position
     *
     * @param  array  $positionData
     * @return Position
     */
    public function savePosition(array $positionData): Position
    {
        return Position::create($positionData);
    }

    /**
     * Get a position by ID
     *
     * @param  Position $position
     * @return Position
     */
    public function getPositionByID(Position $position): Position
    {
        return $position;
    }

    /**
     * Update a position
     *
     * @param  array  $positionData
     * @param  Position $position
     * @return Position
     */
    public function updatePosition(array $positionData, Position $position): Position
    {
        $position->update($positionData);
        return $position;
    }

    /**
     * Delete a position
     *
     * @param  Position $position
     * @return void
     */
    public function deletePosition(Position $position): void
    {
        throw new \Exception('No se puede eliminar un cargo');
    }
}
