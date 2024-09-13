import React from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci';
import { IoMdDoneAll } from 'react-icons/io';
import { MdPendingActions } from 'react-icons/md';

const Booking = () => {
    return (
        <div>
            <div className='flex justify-between items-center border-b pb-4'>
                <h2 className='text-2xl font-semibold text-[#094074]'>Booking</h2>
                {/* <button className='py-2 px-4 bg-[#094074] text-white rounded-full'>Add</button> */}
            </div>
            <div className='w-full text-[#094074] my-6 shadow p-6 space-y-6 rounded-md'>
                <h3 className='font-semibold text-[#094074]'>Booking Overview</h3>
                <div className='flex justify-start items-center gap-6'>
                    <div className=' bg-[#F3E7FE] p-4 space-y-2 text-center rounded-lg'>
                        <span className='text-2xl p-2 rounded-full bg-[#C389FF] inline-block text-white'><AiOutlineFileDone /></span>
                        <h4 className='font-bold text-xl'>5</h4>
                        <span className='inline-block'>Total Booking</span>
                    </div>
                    <div className=' bg-[#FFF4DE] p-4 space-y-2 text-center rounded-lg'>
                        <span className='text-2xl p-2 rounded-full bg-[#FE947A] inline-block text-white'><MdPendingActions /></span>
                        <h4 className='font-bold text-xl'>3</h4>
                        <span className='inline-block'>Pending</span>
                    </div>
                    <div className=' bg-[#DCFCE7] p-4 space-y-2 text-center rounded-lg'>
                        <span className='text-2xl p-2 rounded-full bg-[#3CD956] inline-block text-white'><IoMdDoneAll /></span>
                        <h4 className='font-bold text-xl'>4</h4>
                        <span className='inline-block'>Completed</span>
                    </div>
                    <div className=' bg-[#FFE2E6] p-4 space-y-2 text-center rounded-lg'>
                        <span className='text-2xl p-2 rounded-full bg-[#FB7793] inline-block text-white'><CiCircleRemove /></span>
                        <h4 className='font-bold text-xl'>2</h4>
                        <span className='inline-block'>Cancelled</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;