import React from 'react'
import { GrChannel } from 'react-icons/gr'
import Channel from './Channel'
import lmht from '../assets/lmht.jpg'
import lmht2 from '../assets/lmht2.webp'
import lmht3 from '../assets/lmht3.jpg'
import lmht4 from '../assets/lmht4.jpg'
import lmht5 from '../assets/lmht5.jpeg'
import lmht6 from '../assets/lmht6.jpg'
import lmht7 from '../assets/lmht7.jpg'
import lmht8 from '../assets/lmht8.webp'



const Sidebar = () => {
  const channels = [
    { profile: lmht, name: "Nhat's Dev" },
    { profile: lmht2, name: "Nhat's Dev" },
    { profile: lmht3, name: "Nhat's Dev" },
    { profile: lmht4, name: "Nhat's Dev" },
    { profile: lmht5, name: "Nhat's Dev" },
    { profile: lmht6, name: "Nhat's Dev" },
    { profile: lmht7, name: "Nhat's Dev" },
    { profile: lmht8, name: "Nhat's Dev" }
  ];

  return (
    <div className='sticky top-[56px] bg-[#e9e7e7] p-2 border-r h-full z-20'>
      {/* Title */}
      <div className='whitespace-nowrap flex justify-center'>
        <p className='hidden lg:flex text-[13px] font-bold'>
          RECOMMENDED CHANNELS
        </p>
        <div className='lg:hidden'>
          <GrChannel />
        </div>
      </div>
      {/* Recommended */}
      <div className='flex flex-col gap-2 pt-4'>
        {channels.map((channel) =>
          <Channel profile={channel.profile} name={channel.name} />
        )}
      </div>
    </div>
  )
}

export default Sidebar;