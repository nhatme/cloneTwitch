import React from 'react';
import gamepad from '../assets/gamepad.png'
import Category from './Category';
import mic from '../assets/mic.png'
import dj from '../assets/dj.png'
import cup from '../assets/cup.png'
import paint from '../assets/paint.svg'

const Explore = () => {
    const categories = [
        {
            title: 'Lives',
            icon: gamepad,
            css: 'w-[3.5rem] h-[2.5rem] -top-[0.4rem] left-[9.3rem] -rotate-45'
        },
        {
            title: 'Chatting',
            icon: mic,
            css: 'w-[1.8rem] h-[0.4rem] -top-[1.2rem] left-[11.7rem] rotate-[20deg]'
        },
        {
            title: 'Remix',
            icon: dj,
            css: 'w-[3rem] h-[2rem] -top-[0.2rem] left-[9rem] -rotate-45'
        },
        {
            title: 'Esports',
            icon: cup,
            css: 'w-[3rem] h-[2rem] -top-[0.3rem] left-[10rem] rotate-[20deg]'
        },
        {
            title: 'Arts',
            icon: paint,
            css: 'w-[3.5rem] h-[2.5rem] -top-[0.1rem] left-[9.3rem] rotate-[20deg]'
        }
    ];
    return (
        <div className='px-3 lg:px-[0.01rem]'>
            {/* Title */}
            <h1 className='text-[55px] font-bold'>Explore</h1>
            {/* Categories */}
            <div className='flex flex-wrap gap-x-5 sm:gap-x-13 gap-y-5'>
                {categories.map((category) => (
                    <Category
                        title={category.title}
                        icon={category.icon}
                        css={category.css}
                    />
                ))}
            </div>
        </div>
    )
};

export default Explore;