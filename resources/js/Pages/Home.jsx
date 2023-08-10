import React, { useState } from 'react';
import Main from '../Layouts/Main';

const Test = ({authUser }) => {

    return (
        <Main authUser>
            <h1 className=' text-red-500 text-lg'>This is home component Welcome, {authUser? authUser.name : ''}!</h1>
        </Main>
    );
}

export default Test
