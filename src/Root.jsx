import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './global/navbar/Navbar';
import Footer from './global/footer/Footer';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;