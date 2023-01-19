import React from 'react';
import logo from '../assets/logo.png';
import { BsThreeDotsVertical, BsSearch, BsFillInboxFill }
    from "react-icons/bs";


const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white py-[0.6rem] px-3 lg:px-8 flex items-center 
        justify-between z-20'>
            {/* Left Side */}
            <div className='flex items-center gap-5'>
                <img src={logo} alt='' className='w-8 h-8'></img>
                <div className=''>
                    <p className='font-semibold text-[#9147ff]'>Explore</p>
                </div>
                <BsThreeDotsVertical className='text-[20px]' />
            </div>
            {/* Middle */}
            <div className='sm:flex items-center relative hidden '>
                <input type='search' placeholder='Search'
                    className='outline-0 bg-[#e9e7e7] p-1.5 
                rounded-full pl-10 sm:w-[10rem] md:w-[20rem] 
                lg:w-[30rem]' />
                <BsSearch className='absolute left-2' />

            </div>
            {/* Right */}
            <div className='flex items-center gap-5'>
                <div className='relative pr-2'>
                    <BsFillInboxFill className='text-[25px]' />
                    <div className='absolute -top-[0.01rem] left-2 w-7 h-3 bg-red-500 
                rounded-full flex items-center 
                justify-center animate-pulse'>
                        <p className='text-white fonr-bold text-[12px]'>60</p>
                    </div>
                </div>
                <div className='bg-gray-200 py-1 px-2 rounded-[0.4rem]'>
                    <button className='font-semibold'>Log in</button>
                </div>
                <div className='bg-[#9147ff] py-1 px-2 rounded-[0.4rem]'>
                    <button className='text-white font-semibold'>Sign up</button>
                </div>
            </div>

        </div>
    )
};

export default Navbar;