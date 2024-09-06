import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    const [as, setAs] = useState('user')
    return (
        <div className='w-full px-6 text-[#094074] '>
            <div className='my-16 font-poppins w-full md:w-2/3 lg:w-1/3 mx-auto border-l-4 md:border border-[#094074] pl-3 md:p-9 md:rounded-lg space-y-4'>
                <div className='space-y-4'>
                    <div className='flex justify-start items-center gap-2'>
                        <button onClick={() => setAs('user')} className={`bg-gray-200 hover:bg-gray-300 rounded-full  ${as === 'user' ? 'border-8 border-[#094074] p-1 hover:bg-gray-200' : 'p-3'}`}></button>
                        <span>Register as a <b>User</b></span>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <button onClick={() => setAs('seller')} className={`bg-gray-200 hover:bg-gray-300 rounded-full  ${as === 'seller' ? 'border-8 border-[#094074] hover:bg-gray-200 p-1' : 'p-3'}`}></button>
                        <span>Register as a <b>Seller</b></span>
                    </div>

                </div>
                <hr className=' border-t border-[#094074]' />
                <form className='space-y-4 w-full'>
                    <div className='w-full space-y-1'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">Full Name</span>
                        <input className='py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074]' type="text" placeholder='Enter full name' />
                    </div>
                    <div className='w-full space-y-1'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">Address</span>
                        <input className='py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074]' type="text" placeholder='Enter your address' />
                    </div>
                    <div className='w-full space-y-1'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">Contact No</span>
                        <input className='py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074]' type="number" placeholder='Enter contact number' />
                    </div>
                    <div className='w-full space-y-1'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
                        <input className='py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074]' type="email" placeholder='Enter email' />
                    </div>
                    <div className='w-full space-y-1'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">Password</span>
                        <input className='py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074]' type="password" placeholder='Enter password' />
                    </div>
                    <input className='bg-[#094074] py-2 text-white w-full hover:bg-opacity-90' type="submit" value={'Register'} />
                </form>
                <div className="flex items-center text-[#094074]">
                    <div className="flex-grow border-t border-[#094074]"></div>
                    <span className="mx-4">Or</span>
                    <div className="flex-grow border-t border-[#094074]"></div>
                </div>
                <button className='flex justify-center items-center gap-6 border border-[#094074] py-2 w-full text-[#094074] font-medium bg-[#094074] bg-opacity-10'>
                    <span className='text-xl'><FcGoogle /></span>
                    <span>Google</span>
                </button>
                <p className='text-[#094074]'>Already registered? <Link to={'/login'} className='underline'>Log in</Link></p>
            </div>
        </div>
    );
};

export default Register;