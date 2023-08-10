
// @php
// $classes = ($active ?? false)
//             ? ''
//             : '';
// @endphp


import React from 'react';
import { Link } from '@inertiajs/react'

function NavLink({href, method = 'get', children}) {
    return (
        <Link method={method} href={href} className={`h-full min-w-max inline-flex text-md justify-between items-center gap-2 px-1 pt-1 border-b-2 transition duration-150 ease-in-out ${window.location.pathname === href ? 'active-link' : 'inactive-link'}`}
        >
            { children }
        </Link>
    );
}

export default NavLink;
