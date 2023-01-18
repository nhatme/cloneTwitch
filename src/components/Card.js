import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div>
      <div className='h-[17rem] w-[13rem] flex'>
        <img src={image} alt='' className='object cover
        w-full h-full rounded-[0.5rem]'/>
      </div>
      <p className='font-semibold text-[18px]'>{title}</p>
      <p className='text-[15px] text-gray-600 -mt-1'>1M viewers</p>
    </div>
  )
}

export default Card;

