import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import './Navbar.css';
// <FiMenu />

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full bg-[#094074] z-50 relative'>
            <div className='py-6 px-6 lg:px-0 text-white flex justify-between items-center max-w-6xl mx-auto'>
                <h2 className='font-kanit text-2xl md:text-2xl lg:text-4xl font-bold'>FluidFix</h2>
                <h2 onClick={() => setOpen(!open)} className='text-white text-xl md:hidden lg:hidden'><FiMenu /></h2>
                <div id='menu' className={`font-poppins fixed md:static lg:static flex border md:border-none lg:border-none border-white flex-col md:flex-row lg:flex-row bg-[#094074] md:justify-center lg:justify-center items-center gap-9 inset-0 pt-16 pb-6 md:pt-0 lg:pt-0 md:pb-0 lg:pb-0 transform transition duration-300 z-20 ${open ? '' : '-translate-x-full md:-translate-x-0 lg:-translate-x-0'}`}>
                    <NavLink onClick={() => setOpen(!open)} to={'/'} className='relative hover-underline inline-block'>Home</NavLink>
                    <NavLink onClick={() => setOpen(!open)} to={'/services'} className='relative hover-underline inline-block'>Services</NavLink>
                    <NavLink onClick={() => setOpen(!open)} to={'/about'} className='relative hover-underline inline-block'>About Us</NavLink>
                    <NavLink onClick={() => setOpen(!open)} to={'/login'} className='relative hover-underline inline-block'>Log in</NavLink>
                    <NavLink onClick={() => setOpen(!open)} to={'/dashboard'} className='relative hover-underline inline-block'>Dashboard</NavLink>

                    <h2 onClick={() => setOpen(!open)} className='absolute top-6 right-9 text-2xl md:hidden lg:hidden text-white bg-white bg-opacity-30 hover:bg-opacity-20'><IoMdClose /></h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;