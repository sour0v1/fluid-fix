import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
// <FiMenu />

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-[#094074] px-6 md:px-12 lg:px-16 py-6 text-white flex justify-between items-center'>
            <h2 className='font-kanit text-2xl md:text-2xl lg:text-4xl'>FluidFix</h2>
            <h2 onClick={() => setOpen(!open)} className='text-white text-xl md:hidden lg:hidden'><FiMenu /></h2>
            <div className={`font-poppins absolute md:static lg:static flex border md:border-none lg:border-none border-white flex-col md:flex-row lg:flex-row bg-[#094074] md:justify-center lg:justify-center items-center gap-9 inset-0 pt-16 pb-6 md:pt-0 lg:pt-0 md:pb-0 lg:pb-0 transform transition duration-300 ${open ? '' : '-translate-x-full md:-translate-x-0 lg:-translate-x-0'}`}>
                <NavLink className= 'relative hover-underline inline-block'>Home</NavLink>
                <NavLink className= 'relative hover-underline inline-block'>Services</NavLink>
                <NavLink className= 'relative hover-underline inline-block'>About Us</NavLink>
                <NavLink className= 'relative hover-underline inline-block'>Log in</NavLink>

                <h2 onClick={() => setOpen(!open)} className='absolute top-6 right-9 text-2xl md:hidden lg:hidden text-white bg-white bg-opacity-30 hover:bg-opacity-20'><IoMdClose /></h2>
            </div>
        </div>
    );
};

export default Navbar;