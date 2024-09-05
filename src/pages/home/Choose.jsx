import React from 'react';
import { FaToolbox, FaTools } from 'react-icons/fa';
import image from '../../assets/services.png'
import { GrServices } from 'react-icons/gr';
import { MdOutlineBookmarkAdded } from 'react-icons/md';
import { IoPricetagOutline } from 'react-icons/io5';
import { AiOutlineTool } from 'react-icons/ai';

const Choose = () => {
    return (
        <div className='bg-[#094074] flex flex-col md:flex-row lg:flex-row justify-center items-center my-16 border border-[#094074] font-poppins'>
            <img className='w-full md:w-1/2 flex-grow' src={image} alt="" />
            <div className='text-white px-6 space-y-4 py-6 lg:py-0 w-full md:w-1/2'>
                <h3 className='uppercase opacity-100 text-2xl font-semibold'>Why choose us?</h3>
                <p className=''>The Ultimate Platform to Find Reliable and Trusted Service Providers for All Your Needs.</p>
                <p className='flex justify-start items-center gap-2'>
                    <span><GrServices /></span>
                    <span className='font-medium'>Wide Range of Services</span>
                </p>
                <p className='flex justify-start items-center gap-2'>
                    <span><AiOutlineTool /></span>
                    <span className='font-medium'>Trusted Professionals</span>
                </p>
                <p className='flex justify-start items-center gap-2'>
                    <span><MdOutlineBookmarkAdded /></span>
                    <span className='font-medium'>Easy Booking Process</span>
                </p>
                <p className='flex justify-start items-center gap-2'>
                    <span><IoPricetagOutline /></span>
                    <span className='font-medium'>Affordable & Transparent Pricing</span>
                </p>
            </div>
        </div>
    );
};

export default Choose;