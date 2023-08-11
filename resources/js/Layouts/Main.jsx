import React from 'react';
import Nav from '../Components/Nav';

const Main = ({ auth, children }) => {
    return (
        <div>
            <Nav
            auth={auth}
            />
            { children }
        </div>
    );
}

export default Main;
