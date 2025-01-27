'use client'
import React from 'react'

const Call_Search = () => {
  return (
    <div className="p-4 border-b-2 box5">
      <div className="flex items-center space-x-4">
        {/* <img
          src={assets.profile_img}
          alt="Profile" 
          className="w-10 h-10 rounded-full"
        /> */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full p-2 rounded-lg "
          />
        </div>
      </div>
    </div>
  )
}

export default Call_Search