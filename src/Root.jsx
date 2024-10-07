import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './global/navbar/Navbar';
import Footer from './global/footer/Footer';
import ScrollTop from './global/components/ScrollTop';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto'>
                <ScrollTop></ScrollTop>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;