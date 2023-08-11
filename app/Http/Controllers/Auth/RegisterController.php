<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function showRegisterForm()
    {
        return Inertia::render('Auth/Register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name'      => 'required|max:50',
            'email'     => 'required|email|max:100|unique:users',
            'password'  => 'required|min:6|max:100|confirmed'
        ]);

        User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
        ]);

        if (Auth::attempt($request->only('email','password'))) {
            $request->session()->regenerate();
            return redirect()->intended('/');
        }
    }
}
