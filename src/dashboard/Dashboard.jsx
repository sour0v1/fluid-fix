import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'
import SignOut from '../global/components/SignOut';
const Dashboard = () => {
    const [route, setRoute] = useState('Dashboard');
    const [up, setUp] = useState(false);
    return (
        <div className='lg:grid lg:grid-cols-12 lg:my-9 font-poppins relative'>
            <button onClick={() => setUp(!up)} className='lg:hidden py-3 text-center bg-[#094074] text-white flex justify-center items-center gap-6 border-y border-white h-16 z-40 w-full'>
                <span>{route}</span>
                {
                    !up ?
                        <span className='text-xl'><IoIosArrowDown /></span> :
                        <span className='text-xl'><IoIosArrowUp /></span>
                }
            </button>
            <div id='dashboard' className={`lg:col-span-3 text-center lg:text-left p-6  bg-opacity-100 lg:bg-opacity-10 flex flex-col gap-4 absolute lg:static w-full z-30 text-[#094074]  bg-white lg:bg-[#094074]  left-0 top-16 transition transform duration-300 rounded-b-lg lg:rounded-b-none shadow-md ${up ? 'translate-y-0' : '-translate-y-[1000px] lg:translate-y-0'}`}>
                <NavLink to={'/dashboard/seller/home'} className={'hover:bg-[#094074] hover:bg-opacity-10 lg:hover:bg-white py-2 pl-3 transform hover:scale-105 hover:transition-transform duration-300'}>Dashboard</NavLink>
                <NavLink to={'/dashboard/seller/add-service'} className={'hover:bg-[#094074] hover:bg-opacity-10 lg:hover:bg-white py-2 pl-3 transform hover:scale-105 hover:transition-transform duration-300'}>Add service</NavLink>
                <NavLink to={'/dashboard/seller/my-services'} className={'hover:bg-[#094074] hover:bg-opacity-10 lg:hover:bg-white py-2 pl-3 transform hover:scale-105 hover:transition-transform duration-300'}>My Services</NavLink>
                <NavLink to={'/dashboard/seller/booking'} className={'hover:bg-[#094074] hover:bg-opacity-10 lg:hover:bg-white py-2 pl-3 transform hover:scale-105 hover:transition-transform duration-300'}>Booking</NavLink>
                <NavLink to={'/dashboard/seller/earning'} className={'hover:bg-[#094074] hover:bg-opacity-10 lg:hover:bg-white py-2 pl-3 transform hover:scale-105 hover:transition-transform duration-300'}>Earning</NavLink>
                <NavLink to={'/dashboard/seller/profile-info'} className={'hover:bg-[#094074] hover:bg-opacity-10 lg:hover:bg-white py-2 pl-3 transform hover:scale-105 hover:transition-transform duration-300'}>Profile Info</NavLink>
                <SignOut></SignOut>
            </div>
            <div className='border lg:col-span-9 p-6 lg:p-9'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;