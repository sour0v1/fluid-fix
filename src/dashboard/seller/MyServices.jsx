import React from 'react';
import image from '../../assets/services.png'

const MyServices = () => {
    return (
        <div>
            <div className='flex justify-between items-center border-b pb-4'>
                <h2 className='text-2xl font-semibold text-[#094074]'>My Services</h2>
                {/* <button className='py-2 px-4 bg-[#094074] text-white rounded-full'>Add</button> */}
            </div>
            <div className='flex justify-center items-center h-[300px] w-full text-[#094074] my-6 bg-[#094074] bg-opacity-10 shadow-lg'>
                <img className='w-1/2 h-full' src={image} alt="Image" />
                <div className='w-1/2 space-y-3 px-6'>
                    <p className='text-sm font-semibold border-l-2 pl-1 border-[#094074]'>Plumbing</p>
                    <h2 className='text-xl font-semibold'>Plumbing service title</h2>
                    <p>Use a map where the seller can drop pins for the locations they serve. Each pin should correlate to an added location...</p>
                    <p className='font-semibold'>From <span className='underline'>500</span> taka</p>
                    <div className='flex justify-start items-center gap-3'>
                        <button className='px-6 py-2 bg-[#094074] text-white'>Edit</button>
                        <button className='px-6 py-2 bg-red-600 text-white'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;