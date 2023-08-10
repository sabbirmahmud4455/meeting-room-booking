import React, { useEffect } from 'react';
import InputMain from '../../Components/Input/Main';
import InputCheckbox from '../../Components/Input/Checkbox';
import Main from '../../Layouts/Main';
import { Link, useForm } from '@inertiajs/react';

const Login = () => {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    //log data where data is updated every time
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <Main>
            <div className=" container mt-10 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className=" card max-w-lg mx-auto p-10 flex flex-col gap-y-3">

                        {errors.error && <p className="text-sm font-semibold text-red-600 error">{errors.error}</p>}

                        <InputMain
                            type="email"
                            placeholder="johndoe@example.com"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            errorMessage={errors.email ?? ''}
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

                        <div className='flex justify-between'>
                            <InputCheckbox
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            >
                                Remember Me
                            </InputCheckbox>

                            <Link className='link' href='/register'>Register</Link>

                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full font-bold rounded btn btn-primary btn-lg"
                            >
                                Login
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </Main>
    );
}

export default Login;
