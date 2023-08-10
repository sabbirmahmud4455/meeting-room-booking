<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

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


Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::Post('/login', [LoginController::class, 'login']);
Route::get('/register', [RegisterController::class, 'showRegisterForm']);
Route::Post('/register', [RegisterController::class, 'register']);


Route::middleware(['auth'])->group(function () {
    Route::post('/logout', [LoginController::class, 'logout']);

    Route::get('/', [HomeController::class, 'index'])->name('home');

});
