import React from 'react';
import banner from '../../assets/services.png'
import { Link } from 'react-router-dom';
import Choose from './Choose';

const Home = () => {
    return (
        <div className='my-9'>
            <div style={{ backgroundImage: `url(${banner})` }}
                className="bg-cover bg-center h-screen flex items-center justify-center border border-[#094074] ">
                <div className='bg-black bg-opacity-70 w-full h-full text-white font-poppins flex flex-col justify-center items-center gap-12'>
                    <div className='flex flex-col justify-center items-center md:gap-3 lg:gap-3 italic text-center'>
                        <h1 className='text-5xl font-bold'>Find <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white relative inline-block">
                            <span className="relative text-[#094074] z-10">Expert</span>
                        </span> Help for Your</h1>
                        <h1 className='text-5xl font-bold'>Home Needs</h1>
                    </div>

                    <p className='text-xl text-center'>From plumbing to electrical work, connect with trusted professionals.</p>

                    <Link className='py-3 px-6  text-white rounded-lg font-semibold border border-white hover:bg-white hover:text-[#094074] transition duration-300'>Explore Services</Link>
                </div>

            </div>

            <Choose></Choose>
        </div>
    );
};

export default Home;