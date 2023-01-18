import React from 'react'
import tv from '../assets/tv.jpg'
import { GrChannel } from 'react-icons/gr'
import Channel from './Channel'


const Sidebar = () => {
  const channels = [
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
    { profile: tv, name: "Nhat's Dev" },
  ];

  return (
    <div className='bg-[#e9e7e7] p-2'>
      {/* Title */}
      <div className='whitespace-nowrap'>
        <p className='hidden lg:flex text-[15px] font-semibold'>
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