import React from 'react';
import banner from '../../assets/services.png'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-9 font-poppins text-[#094074]'>
            <div style={{ backgroundImage: `url(${banner})` }}
                className="bg-cover bg-center h-[300px] flex items-center justify-center">
                <div className='bg-black bg-opacity-80 w-full h-full text-white font-poppins flex flex-col justify-center items-center gap-12'>
                    <h2 className='border-l-4 text-4xl font-bold pl-2'>About Us</h2>
                </div>

            </div>
            <div className='max-w-2xl mx-auto space-y-4 mt-9 px-6 lg:px-0'>
                <p>Welcome to Fluid Fix, your trusted marketplace for reliable home services! We connect homeowners and businesses with skilled service providers in a wide range of areas including electrical work, plumbing, pipe filtering, TV repair, fridge mechanics, and much more.</p>

                <p>At Fluid Fix, our mission is simple: to make finding and hiring expert technicians easy and hassle-free. Whether you are dealing with a plumbing emergency, need an electrician for a quick fix, or want to schedule regular maintenance, we have got you covered.</p>

                <p>Our platform ensures that all service providers are thoroughly vetted, so you can trust that you are getting high-quality work from professionals who know their craft. Sellers on our platform are experienced, certified, and ready to help with whatever task you need.</p>

                <p>Why Choose Us?</p>

                <ul className='pl-9 space-y-2'>
                    <li className='list-disc'>Wide Range of Services: From basic repairs to specialized tasks, we offer a variety of services tailored to your needs.</li>
                    <li className='list-disc'>Trusted Professionals: We only partner with qualified and reliable service providers, ensuring top-notch quality.</li>
                    <li className='list-disc'>Convenient: Book services from the comfort of your home and let us handle the rest. Your convenience and satisfaction are our top priorities.</li>
                </ul>

                <p>At Fluid Fix, we believe in making home maintenance as simple as possible. No matter the size of the job, you can trust our marketplace to find the right expert for you. Join our growing community and experience the difference today!</p>
            </div>
        </div>
    );
};

export default About;