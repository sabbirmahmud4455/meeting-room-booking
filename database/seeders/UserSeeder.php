<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Array of user data
        $userData = [
            [
                'name'     => 'Test Admin',
                'email'    => 'test@admin.com',
                'password' => Hash::make('123456'),
                'is_admin' => true,
            ],
            [
                'name'     => 'Test User',
                'email'    => 'test@user.com',
                'password' => Hash::make('123456'),
                'is_admin' => false, // Add the is_admin value for the normal user
            ],
        ];


        User::insert($userData);
    }
}
