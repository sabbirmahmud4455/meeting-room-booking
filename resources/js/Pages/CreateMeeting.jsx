import React, { useEffect } from 'react';
import InputMain from '../Components/Input/Main';
import InputCheckbox from '../Components/Input/Checkbox';
import Main from '../Layouts/Main';
import { Link, useForm, usePage } from '@inertiajs/react';
import Textarea from '../Components/Input/Textarea';
import Select from '../Components/Input/Select';

const CreateMeeting = ({rooms, auth, flash}) => {


    const { data, setData, post, processing, errors } = useForm({
        name: '',
        room: '',
        date: '',
        star: '',
        end: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/store-meeting');
    };

    return (
        <Main auth={auth}>
            <div className=" container mt-10 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className=" card max-w-lg mx-auto p-10 flex flex-col gap-y-3">

                        {flash.successMessage && <p className="text-md font-semibold  text-green-700 error">{flash.successMessage}</p>}
                        {flash.errorMessage && <p className="text-sm font-semibold text-red-600 error">{flash.errorMessage}</p>}


                        <div className=' grid grid-cols-3 gap-x-2'>
                            <div className=' col-span-2'>
                                <InputMain
                                    placeholder="Ex: Outdoor Marketing"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    errorMessage={errors.name ?? ''}
                                >
                                    Name
                                </InputMain>
                            </div>

                            <div className=' col-span-1'>
                                <Select
                                    label='Room'
                                    value={data.room}
                                    onChange={(e) => setData('room', e.target.value)}
                                    errorMessage={errors.room ?? ''}
                                >
                                    <option value="">--select room--</option>
                                    {rooms.map((room) => (
                                        <option key={room.id} value={room.id}>{room.name}</option>
                                    ))}

                                </Select>
                            </div>
                        </div>


                        <div className=' grid grid-cols-3 gap-x-2'>
                            <InputMain
                                type="date"
                                value={data.date}
                                onChange={(e) => setData('date', e.target.value)}
                                errorMessage={errors.date ?? ''}
                            >
                                Date
                            </InputMain>

                            <InputMain
                                type="time"
                                value={data.start}
                                onChange={(e) => setData('start', e.target.value)}
                                errorMessage={errors.start ?? ''}
                            >
                                Start
                            </InputMain>

                            <InputMain
                                type="time"
                                value={data.end}
                                onChange={(e) => setData('end', e.target.value)}
                                errorMessage={errors.end ?? ''}
                            >
                                End
                            </InputMain>
                        </div>

                        <Textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            errorMessage={errors.description ?? ''}
                        >
                            Description
                        </Textarea>

                        <div className=' flex '>
                            <button
                                type="submit"
                                disabled={processing}
                                className="ml-auto rounded btn btn-primary btn-lg"
                            >
                                Create Meeting
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Main>
    );
}

export default CreateMeeting;
