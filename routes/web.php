<?php

use App\Http\Controllers\AngularController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [AngularController::class, 'index'])->where('any', '^(?!api).*$');

Route::get('/{any}', function () {
    // return view('welcome');
    abort(404);
})->where('any', '^(?!api).*$');;

// Route::get('/phpinfo', function () {
//     return phpinfo();
// });

// Route::get('/sendmail', function (Request $request) {
//     $ip = $request->ip();
//     Mail::raw('Hi user, a new login into your account from the IP Address: ' . $ip, function ($message) {
//         $message->from('lanea07@gmail.com', 'Juan Soto');
//         $message->to('juan.soto@flamingo.com', 'User Name');
//     });
// });
