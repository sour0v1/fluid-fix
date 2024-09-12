import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';

const AddService = () => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('Category');
    return (
        <div className='z-20 bg-white'>
            <div className='flex justify-between items-center border-b pb-4'>
                <h2 className='text-2xl font-semibold text-[#094074]'>Add Service</h2>
                <button className='py-2 px-4 bg-[#094074] text-white rounded-full'>Add</button>
            </div>
            <div className='w-full text-[#094074] my-6'>
                <form className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-1'>
                        <span>Service Title</span>
                        <input className='py-2 rounded-full px-6 bg-[#094074] bg-opacity-10 outline-none focus:border-2 focus:border-[#094074]' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span>Service Category</span>
                        <div className='relative'>
                            <button type='button' onClick={() => setOpen(!open)} className='w-full py-2 rounded-full px-6 bg-[#094074] bg-opacity-10 flex justify-center items-center gap-3'>
                                <span>{category}</span>
                                <span className='text-2xl'>{open ?  <IoMdArrowDropup /> :  <IoMdArrowDropdown />}</span>
                            </button>
                            <div className={`space-y-4 shadow-lg py-6 absolute w-full bg-white rounded-b-lg transition-transform  duration-300 origin-top ${open ? '' : 'scale-y-0'}`}>
                                <button onClick={() => {setCategory('Category 1'); setOpen(!open)}} type='button' className='hover:bg-[#094074] hover:bg-opacity-10 w-full py-2 flex flex-col justify-start items-center'>Catgory 1</button>
                                <button onClick={() => {setCategory('Category 2'); setOpen(!open)}} type='button' className='hover:bg-[#094074] hover:bg-opacity-10 w-full py-2 flex flex-col justify-start items-center'>Catgory 2</button>
                                <button onClick={() => {setCategory('Category 3'); setOpen(!open)}} type='button'  className='hover:bg-[#094074] hover:bg-opacity-10 w-full py-2 flex flex-col justify-start items-center'>Catgory 3</button>
                                <button onClick={() => {setCategory('Category 4'); setOpen(!open)}} type='button'  className='hover:bg-[#094074] hover:bg-opacity-10 w-full py-2 flex flex-col justify-start items-center'>Catgory 4</button>
                                <button onClick={() => {setCategory('Category 5'); setOpen(!open)}} type='button'  className='hover:bg-[#094074] hover:bg-opacity-10 w-full py-2 flex flex-col justify-start items-center'>Catgory 5</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;