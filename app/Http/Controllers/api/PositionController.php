<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePositionRequest;
use App\Models\Position;

class PositionController extends Controller
{

    public function __construct()
    {
        $this->middleware('checkroles:Admin');
    }

    public function index()
    {
        $this->authorize('index', auth()->user());
        return Position::all();
    }


    public function store(CreatePositionRequest $request)
    {
        $newPosition = $request->validated();
        $newPosition = Position::create($newPosition);
        return response($newPosition, 201);
    }


    public function show(Position $position)
    {
        return $position;
    }


    public function update(Position $position, CreatePositionRequest $request)
    {
        $this->authorize('update', $position);
        $position->update($request->validated());
        // broadcast(new DirectorioUpdate($position));
        return response($position, 200);
    }


    public function destroy(Position $position)
    {
        try {
            $this->authorize('destroy', $position);
            $position->delete();
            return response(['msg' => 'Posición eliminada'], 200);
        } catch (\Throwable $th) {
            return response($th, 500);
        }
    }
}
