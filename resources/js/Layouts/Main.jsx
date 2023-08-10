import React from 'react';
import Nav from '../Components/Nav';

const Main = ({ authUser, children }) => {
    return (
        <div>
            <Nav
            authUser={authUser}
            />
            { children }
        </div>
    );
}

export default Main;
