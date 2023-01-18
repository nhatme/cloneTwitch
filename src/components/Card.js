import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div>
      <div className='h-55 w-60 flex'>
        <img src={image} alt='' className='object cover
        w-full h-full'/>
      </div>
    </div>
  )
}

export default Card;

