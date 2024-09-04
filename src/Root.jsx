import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './global/navbar/Navbar';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Root;