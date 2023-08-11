<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Array of room data
        $roomData = [
            [
                'name'     => 'Room One',
            ],
            [
                'name'     => 'Room Two',
            ],
        ];

        Room::insert($roomData);
    }
}
