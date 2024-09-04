import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full px-6'>
            <div className='my-16 font-poppins w-full md:w-2/3 lg:w-1/3 mx-auto border-l-4 md:border border-[#094074] p-3 md:p-9 md:rounded-lg space-y-4'>
                <form className='space-y-4 w-full'>
                    <input className='py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074]' type="email" placeholder='Enter email' />
                    <div className='w-full'>
                        <input className='py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074]' type="password" placeholder='Enter password' />
                        <Link className='text-[#094074] block mt-2 text-end'>Forgot password?</Link>
                    </div>
                    <input className='bg-[#094074] py-2 text-white w-full hover:bg-opacity-90' type="submit" value={'Log In'} />
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
            </div>
        </div>
    );
};

export default Login;