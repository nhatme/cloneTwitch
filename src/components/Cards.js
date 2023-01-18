import React from 'react';

const Cards = () => {
    const cards = [{title:''}]
    return (
        <div>
            {/* Title */}
            <div className='font-bold text-[20px] 
        flex items-center pt-12 gap-x-6'>
                <p className=''>Topics</p>
                <p>Creators</p>
            </div>
            {/* Filter */}
            <div className='flex items-center pt-2'>
                <p className='font-bold pt-2'>Search by category</p>
                <input type='search' 
                className='ml-4 outline-0 bg-[#e9e7e7]
                p-2 rounded-full pl-4' placeholder='Search by category'/>
            </div>
            {/* Cards */}
            <div className=''></div>
        </div>
    );
};

<h1> hiahidahhahdeao</h1>

export default Cards;