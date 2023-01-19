import React from 'react';
import Cards from './Cards';
import Explore from './Explore';


const Main = () => {
  return (
    <div className='w-full px-4 lg:px-7'>
        {/* Browse */}
        <Explore />
        {/* Cards */}
        <Cards />
    </div>
  )
};

export default Main;
