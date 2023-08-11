import React, { useState } from 'react';
import Main from '../Layouts/Main';
import CalendarView from '../Components/CalendarView';

const Home = ({ auth, rooms }) => {

    const [activeTab, setActiveTab] = useState(rooms[0].id);
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };

    return (
        <Main auth={auth}>
            <div className='container mx-auto mt-4 grid grid-cols-4 gap-x-5'>

                <div className=' col-span-1 card'>
                    <h3 className=' text-xl font-bold text-center my-2'>Rooms</h3>
                    <ul>
                        {rooms.map((room) => (
                            <li
                            key={room.id}
                            onClick={() => handleTabClick(room.id)}
                            className={`${room.id === activeTab ? 'bg-slate-500 text-white' : 'bg-slate-200 hover:bg-slate-300' }  rounded-lg p-2 border-b border-b-gray-300 last:border-b-0 my-1 cursor-pointer `}
                            >{room.name}</li>
                        ))}
                    </ul>
                </div>

                <div className=' col-span-3 card'>
                    {rooms.map((room) =>
                            room.id === activeTab ?

                            <div key={room.id}>
                                <h1 className=" text-xl font-bold my-3 text-center">{room.name} Calendar</h1>
                                <CalendarView meetings={room.meetings} />
                            </div>

                        : null
                    )}
                </div>
            </div>
        </Main>
    );
}

export default Home
