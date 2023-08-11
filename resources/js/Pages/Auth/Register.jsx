
import React, { useEffect } from 'react';
import InputMain from '../../Components/Input/Main';
import Main from '../../Layouts/Main';
import { Link, useForm } from '@inertiajs/react';

const Login = () => {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <Main>
            <div className=" container mt-10 mx-auto">

                <form onSubmit={handleSubmit}>
                    <div className=" card max-w-lg mx-auto p-10 flex flex-col gap-y-3">

                        {errors.error && <p className="text-sm font-semibold text-red-600 error">{errors.error}</p>}

                        <InputMain
                            placeholder="johndoe"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            errorMessage={errors.name ?? ''}
                        >
                            Name
                        </InputMain>

                        <InputMain
                            type="email"
                            placeholder="johndoe@example.com"
                            value={data.email}
                            errorMessage={errors.email ?? ''}
                            onChange={(e) => setData('email', e.target.value)}
                        >
                            Email
                        </InputMain>

                        <InputMain
                            placeholder="Password"
                            type="password"
                            value={data.password}
                            errorMessage={errors.password ?? ''}
                            onChange={(e) => setData('password', e.target.value)}
                        >
                            Password
                        </InputMain>

                        <InputMain
                            placeholder="Password"
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        >
                            Confirmed Password
                        </InputMain>

                        <div className='flex justify-end'>
                             <Link className='link' href='/login'>Login</Link>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full font-bold rounded btn btn-primary btn-lg"
                            >
                                Register
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </Main>
    );
}

export default Login;
