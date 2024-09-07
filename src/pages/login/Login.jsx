import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AppContext } from '../../provider/Provider';

const Login = () => {
    const [eye, setEye] = useState(false);
    const {user} = useContext(AppContext);
    console.log(user);
    // react hook form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
      }
    return (
        <div className='w-full px-6'>
            <div className='my-16 font-poppins w-full md:w-2/3 lg:w-1/3 mx-auto border-l-4 md:border border-[#094074] pl-3 md:p-9 md:rounded-lg space-y-4'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 w-full'>
                    <input {...register('email', {required : true})} className={`py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074] ${errors.email && 'focus:border-red-500'}`} type="text" placeholder='Enter email' />
                    <div className='w-full relative flex justify-center items-center'>
                        <input {...register('password', {required : true})} className={`py-2 px-3 bg-[#094074] bg-opacity-10 border w-full outline-none focus:border-[#094074] placeholder:text-[#094074] placeholder:opacity-80 text-[#094074] ${errors.password && 'focus:border-red-500'}`} type={eye ? 'text' : 'password'} placeholder='Enter password' />
                        {eye ? 
                        <span onClick={() => setEye(!eye)} className='absolute right-0 text-[#094074] inline-block px-3 py-4'><IoEyeOutline /></span> :
                        <span onClick={() => setEye(!eye)} className='absolute right-0 text-[#094074] inline-block px-3 py-4'><IoEyeOffOutline /></span>
                    }
                        
                    </div>
                    <Link className='text-[#094074] block mt-2 text-end'>Forgot password?</Link>
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
                <p className='text-[#094074]'>New here? <Link to={'/register'} className='underline'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;