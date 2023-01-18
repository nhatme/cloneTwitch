import React from 'react'

const Channel = ({ profile, name }) => {
  return (
    <div >
      <div className='w-12 h-12 flex '>
        <img src={profile} alt='' 
        className='rounded-full object-cover h-full w-full'/>
      </div>
    </div>
  )
}

export default Channel