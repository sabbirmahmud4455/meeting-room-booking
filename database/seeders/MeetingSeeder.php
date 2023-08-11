<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Meeting;
use App\Models\Room;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MeetingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first();
        $room = Room::first();

        $meetingData = [
            [
                'room_id'       => $room->id,
                'name'          => 'test meeting 1',
                'date'          => '2023-08-12',
                'start'         => '13:00:00',
                'end'           => '14:00:00',
                'created_by'    => $user->id,
            ],
            [
                'room_id'       => $room->id,
                'name'          => 'test meeting 2',
                'date'          => '2023-08-12',
                'start'         => '15:00:00',
                'end'           => '16:00:00',
                'created_by'    => $user->id,
            ],
            [
                'room_id'       => $room->id,
                'name'          => 'test meeting 3',
                'date'          => '2023-08-12',
                'start'         => '07:00:00',
                'end'           => '09:00:00',
                'created_by'    => $user->id,
            ],
            [
                'room_id'       => $room->id,
                'name'          => 'test meeting 4',
                'date'          => '2023-08-13',
                'start'         => '15:00:00',
                'end'           => '16:00:00',
                'created_by'    => $user->id,
            ],
        ];

        Meeting::insert($meetingData);
    }
}
