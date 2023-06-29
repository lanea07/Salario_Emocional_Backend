<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\BenefitController;
use App\Http\Controllers\api\BenefitDetailController;
use App\Http\Controllers\api\PositionController;
use App\Http\Controllers\api\RoleController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\BenefitUserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

/** PERSONAL API TOKENS WITH SANCTUM! */

// Route::post('/usercreate', function () {
//     User::create([
//         'name' => 'any',
//         'email' => 'test@example.com',
//         'password' => 'password'
//     ]);
// });

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/validate-roles', [AuthController::class, 'validateAdmin']);
    Route::post('/validate-token', [AuthController::class, 'validateToken']);
    // Route::get('/user', function (Request $request) {
    //     return $request->user();
    // });
    // Route::resource('/user', UserController::class)->middleware('auth:sanctum');
    Route::resource('/benefit', BenefitController::class);
    Route::resource('/benefitdetail', BenefitDetailController::class);
    Route::resource('/benefituser', BenefitUserController::class);
    Route::resource('/position', PositionController::class);
    Route::resource('/role', RoleController::class);
    Route::resource('/user', UserController::class);
});
