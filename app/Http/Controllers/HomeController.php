<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Inertia\Inertia;
use App\Models\Meeting;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $rooms = Room::with([
                'meetings' => function ($meeting) {
                    $meeting->select('id', 'room_id', 'date', 'start','end');
                }
            ])->whereIsActive(true)->get();

        return Inertia::render('Home', compact('rooms'));
    }

    public function my_meetings()
    {
        $myMeetings = Meeting::with('host', 'room')->userMeeting()->get();

        return Inertia::render('MyMeetings', compact('myMeetings'));
    }

    public function create_meetings()
    {
        return Inertia::render('CreateMeeting', [
            'rooms' => Room::select('id', 'name')->whereIsActive(true)->get(),
        ]);
    }

    public function store_meetings(Request $request)
    {
        $request->validate([
            'name'          => 'required|max:100',
            'room'          => 'required|integer',
            'description'   => 'nullable|max:4000',
            'date'          => 'required|date',
            'start'         => 'required|date_format:H:i',
            'end'           => [
                                    'required',
                                    'date_format:H:i',
                                    function ($attribute, $value, $fail) use ($request) {
                                        // Custom validation logic to check if end time is after start time
                                        $startTime = $request->input('start');
                                        if (strtotime($value) <= strtotime($startTime)) {
                                            $fail($attribute . ' must be a time after the start time.');
                                        }
                                    },
                                ],
        ]);

        $meeting = Meeting::where('date', $request->date)
                           ->where('room_id', '<=', $request->room)
                           ->where('start', '<=', $request->end)
                           ->where('end', '>=', $request->start)
                           ->first();

        if ($meeting) {
            $start  = date('g:iA', strtotime($meeting->start));
            $end    = date('g:iA', strtotime($meeting->end));
            return redirect()->back()->with('error_message', "Meeting already exists in ($start to $end)");
        }

        Meeting::create([
            'name'          => $request->name,
            'room_id'       => $request->room,
            'date'          => $request->date,
            'start'         => $request->start,
            'end'           => $request->end,
            'created_by'    => auth()->user()->id,
        ]);

        return redirect()->back()->with('success_message', 'Meeting has been created!');
    }
}
