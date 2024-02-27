<?php

use App\Http\Controllers\api\AdminController;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\BenefitController;
use App\Http\Controllers\api\BenefitDetailController;
use App\Http\Controllers\api\PositionController;
use App\Http\Controllers\api\RoleController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\BenefitUserController;
use App\Http\Controllers\api\DependencyController;
use App\Http\Controllers\api\PreferencesController;
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

Route::middleware('auth:sanctum')->group(function () {
    
    Route::controller(AuthController::class)->group(function () {
        Route::post('/login', 'login')->withoutMiddleware('auth:sanctum');
        Route::post('/logout', 'logout');
        Route::post('/validate-roles', 'validateAdmin');
        Route::post('/validate-token', 'validateToken');
        Route::post('/validate-requirePassChange', 'validateRequirePassChange');
        Route::post('/passwordChange', 'passwordChange');
        Route::post('login-as', 'loginAs');
    });

    Route::controller(BenefitController::class)->group(function () {
        Route::get('/benefit', 'index')->name('benefit.index');
        Route::get('/benefit/available', 'indexAvailable')->name('benefit.indexavailable');
        Route::get('/benefit/create', 'create')->name('	benefit.create');
        Route::delete('/benefit/{benefit}', 'destroy')->name('benefit.destroy');
        Route::get('/benefit/{benefit}/edit', 'edit')->name('benefit.edit');
        Route::get('/benefit/{benefit}', 'show')->name('benefit.show');
        Route::post('/benefit', 'store')->name('benefit.store');
        Route::put('/benefit/{benefit}', 'update')->name('benefit.update');
        Route::patch('/benefit/{benefit}', 'update')->name('benefit.update');
        Route::get('/benefit-settings', 'indexPreferences')->name('benefit-settings.index');
        Route::get('/benefit-settings/{benefit}', 'showPreferences')->name('benefit-settings.show');
        Route::put('/benefit-preferences/{benefit}', 'storePreferences')->name('preferences.store');
    });

    Route::controller(BenefitDetailController::class)->group(function () {
        Route::get('/benefitdetail/create', 'create')->name('benefitdetail.create');
        Route::delete('/benefitdetail/{benefitdetail}', 'destroy')->name('benefitdetail.destroy');
        Route::get('/benefitdetail/{benefitdetail}/edit', 'edit')->name('benefitdetail.edit');
        Route::get('/benefitdetail', 'index')->name('benefitdetail.index');
        Route::get('/benefitdetail/{benefitdetail}', 'show')->name('benefitdetail.show');
        Route::post('/benefitdetail', 'store')->name('benefitdetail.store');
        Route::put('/benefitdetail/{benefitdetail}', 'update')->name('benefitdetail.update');
        Route::patch('/benefitdetail/{benefitdetail}', 'update')->name('benefitdetail.update');
    });

    Route::controller(BenefitUserController::class)->group(function () {
        Route::get('/benefituser/indexcollaboratorsnonapproved', 'indexCollaboratorsNonApproved')->name('benefituser.indexcollaboratorsnonapproved');
        Route::get('/benefituser/indexnonapproved', 'indexNonApproved')->name('benefituser.indexnonapproved');
        Route::get('/benefituser/indexcollaborators', 'indexCollaborators')->name('benefituser.indexCollaborators');
        Route::get('/benefituser', 'index')->name('benefituser.index');
        Route::get('/benefituser/create', 'create')->name('benefituser.create');
        Route::delete('/benefituser/{benefituser}', 'destroy')->name('benefituser.destroy');
        Route::get('/benefituser/{benefituser}/edit', 'edit')->name('benefituser.edit');
        Route::get('/benefituser/{benefituser}', 'show')->name('benefituser.show');
        Route::post('/benefituser', 'store')->name('benefituser.store');
        Route::put('/benefituser/{benefituser}', 'update')->name('benefituser.update');
        Route::patch('/benefituser/{benefituser}', 'update')->name('benefituser.update');
        Route::post('/benefituser/decidebenefituser', 'decideBenefitUser')->name('benefituser.decidebenefituser');
        Route::post('/exportbenefits', 'exportDetail');
    });

    Route::controller(PositionController::class)->group(function () {
        Route::get('/position/create', 'create')->name('position.create');
        Route::delete('/position/{position}', 'destroy')->name('position.destroy');
        Route::get('/position/{position}/edit', 'edit')->name('position.edit');
        Route::get('/position', 'index')->name('position.index');
        Route::get('/position/{position}', 'show')->name('position.show');
        Route::post('/position', 'store')->name('position.store');
        Route::put('/position/{position}', 'update')->name('position.update');
        Route::patch('/position/{position}', 'update')->name('position.update');
    });

    Route::controller(RoleController::class)->group(function () {
        Route::get('/role/create', 'create')->name('role.create');
        Route::delete('/role/{role}', 'destroy')->name('role.destroy');
        Route::get('/role/{role}/edit', 'edit')->name('role.edit');
        Route::get('/role', 'index')->name('role.index');
        Route::get('/role/{role}', 'show')->name('role.show');
        Route::post('/role', 'store')->name('role.store');
        Route::put('/role/{role}', 'update')->name('role.update');
        Route::patch('/role/{role}', 'update')->name('role.update');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('/user/create', 'create')->name('user.create');
        Route::delete('/user/{user}', 'destroy')->name('user.destroy');
        Route::get('/user/{user}/edit', 'edit')->name('user.edit');
        Route::get('/user', 'index')->name('user.index');
        Route::get('/user/{user}', 'show')->name('user.show');
        Route::post('/user', 'store')->name('user.store');
        Route::put('/user/{user}', 'update')->name('user.update');
        Route::patch('/user/{user}', 'update')->name('user.update');
    });

    Route::controller(DependencyController::class)->group(function () {
        Route::get('/dependency/dependencyAncestors/{id}', 'indexAncestors')->name('dependency.dependencyAncestors');
        Route::get('/dependency', 'index')->name('dependency.index');
        Route::get('/dependency/getNonTreeValidDependencies', 'getNonTreeValidDependencies')->name('dependency.getNonTreeValidDependencies');
        Route::get('/dependency/create', 'create')->name('dependency.create');
        Route::delete('/dependency/{dependency}', 'destroy')->name('dependency.destroy');
        Route::get('/dependency/{dependency}/edit', 'edit')->name('dependency.edit');
        Route::get('/dependency/{dependency}', 'show')->name('dependency.show');
        Route::post('/dependency', 'store')->name('dependency.store');
        Route::put('/dependency/{dependency}', 'update')->name('dependency.update');
        Route::patch('/dependency/{dependency}', 'update')->name('dependency.update');
    });

    Route::controller(AdminController::class)->group(function () {
        Route::get('/admin/getAllBenefitUser', 'getAllBenefitUser')->name('admin.getAllBenefitUser');
        Route::get('/admin/getAllGroupedBenefits', 'getAllGroupedBenefits')->name('admin.getAllGroupedBenefits');
    });

    Route::controller(PreferencesController::class)->group(function () {
        Route::get('/user-preferences', 'index')->name('preferences.index');
        Route::get('/user-preferences/{user}', 'show')->name('preferences.show');
        Route::put('/user-preferences/{user}', 'store')->name('preferences.store');
    });

});
