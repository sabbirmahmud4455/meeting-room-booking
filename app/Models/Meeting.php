<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function host()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function scopeUserMeeting($query)
    {
        if (auth()->check()) {
            $query->where('created_by', auth()->user()->id);
        }
        return $query;
    }
}
