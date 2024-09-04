import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#094074] text-white p-6 md:p-9 lg:p-16 font-poppins flex flex-col lg:flex-row justify-between gap-9'>
            {/* footer 1 */}
            <div className='space-y-4'>
                <h2 className='font-kanit text-2xl'>FluidFix</h2>
                <div className='flex flex-col justify-start items-start'>
                    <span>+8801300123321</span>
                    <span>info@fluidfix.com</span>
                    <span>7/B Highway Road, Narsingdi</span>
                </div>
                <div className='flex justify-start items-start gap-6 text-2xl'>
                    <span><FaFacebook /></span>
                    <span><FaXTwitter /></span>
                    <span><FaLinkedin /></span>
                </div>
            </div>
            {/* footer 2 */}
            <div className='flex flex-col gap-6'>
                <h2 className='font-medium text-xl'>Services</h2>
                <span>Electric</span>
                <span>Pipe Fitering</span>
                <span>Tiles Fitting</span>
                <span>Grass Cleaning</span>
                <span>Tank Cleaning</span>
            </div>
            {/* footer 3 */}
            <div className='flex flex-col gap-6'>
                <h2 className='font-medium text-xl'>Quick Links</h2>
                <Link>Services</Link>
                <Link>Quick Link 2</Link>
                <Link>Quick Link 3</Link>
                <Link>Quick Link 4</Link>
            </div>
            {/* footer 4 */}
            <div className='flex flex-col gap-6'>
                <h2 className='font-medium text-xl'>Company</h2>
                <Link>About</Link>
                <Link>Careers</Link>
                <Link>Terms of Use</Link>
                <Link>Privacy Policy</Link>
                <Link>Marketing Agreement</Link>
            </div>
        </div>
    );
};

export default Footer;