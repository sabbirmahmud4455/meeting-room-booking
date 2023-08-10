import React from 'react';
import NavLink from './NavLink';

const Nav = ({authUser}) => {
    return (
        <nav className="border-b border-gray-100 shadow-sm flex justify-center">
            <div className="container h-20 space-x-4 flex justify-between items-center">
                {/*  Logo */}
                <div className="flex items-center">
                    <a href="/">
                        <span className="text-2xl font-bold">
                            Laravel
                        </span>
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="h-full ml-10 space-x-8 sm:-my-px flex items-center">


                    {!authUser ?
                        <>
                            <NavLink
                            href="/login"
                            >
                                Login
                            </NavLink>

                            <NavLink
                            href="/register"
                            >
                                Register
                            </NavLink>
                        </>

                    :
                        <>
                            <NavLink
                            href="/"
                            >
                                Home
                            </NavLink>

                            <NavLink
                            href="/logout"
                            method="post"
                            >
                                Logout
                            </NavLink>
                        </>
                    }

                </div>
            </div>
        </nav>
    );
}

export default Nav;
