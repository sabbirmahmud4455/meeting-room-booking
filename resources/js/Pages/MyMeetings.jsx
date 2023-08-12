import React, { useState } from 'react';
import Main from '../Layouts/Main';
import { Link } from '@inertiajs/react';
import moment from 'moment';


const MyMeetings = ({auth, myMeetings }) => {

    const [activeTab, setActiveTab] = useState(myMeetings[0] ?myMeetings[0].id: null);
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };

    return (
        <Main auth={auth}>
            <div className='container mx-auto '>

                <div className='my-3 flex'>
                    <Link href='/create-meetings' className='btn btn-primary px-2 py-1 ml-auto'>
                        + New Meeting
                    </Link>
                </div>

                <div className='mt-4 grid grid-cols-4 gap-x-5 gap-y-1'>
                    <div className=' col-span-1 card'>
                        <h3 className=' text-xl font-bold text-center my-2'>Meetings</h3>
                        <ul>
                            {myMeetings.length > 0

                            ?
                                myMeetings.map((meeting) => (
                                    <li
                                    key={meeting.id}
                                    onClick={() => handleTabClick(meeting.id)}
                                    className={`${meeting.id === activeTab ? 'bg-slate-500 text-white' : 'bg-slate-200 hover:bg-slate-300' }  rounded-lg p-2 border-b border-b-gray-300 last:border-b-0 my-1 cursor-pointer `}
                                    >{meeting.name}</li>
                                ))
                            :
                                <li className=' p-2  my-1 '>No Meetings</li>
                            }
                        </ul>
                    </div>

                    {myMeetings.map((meeting) =>
                        meeting.id === activeTab ?

                        <div key={meeting.id}  className=' col-span-3 card  p-5'>
                            <h4 className=' text-xl font-bold'>{meeting.name}</h4>
                            <p className=' text-base font-semibold'>Date: {moment(meeting.date).format("DD MMMM YYYY")}</p>
                            <p className=' text-base font-semibold'>Time: {moment(meeting.start, "HH:mm:ss").format("h:mm A")} <span className='p='>-</span> {moment(meeting.end, "HH:mm:ss").format("h:mm A")}</p>
                            <p className=' text-base font-semibold'>Room: {meeting.room && meeting.room.name}</p>
                            <p className=' text-base font-semibold'>Host: {meeting.host && meeting.host.name}</p>
                            <p className=' text-base font-semibold'>Description:</p>
                            <p>{meeting.description}</p>
                        </div>

                        : null
                    )}

                </div>
            </div>
        </Main>
    );
}

export default MyMeetings
