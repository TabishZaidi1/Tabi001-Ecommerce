import React from 'react';
import Image from "next/image";  // Correctly import 'Image'

export default function Navbar() {
  return (
    <div className='w-full max-w-screen-xl mx-auto bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-6 border-b-2 border-b-[#e7eef6]'>
      {/* Navbar Left */}
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        {/* Logo */}
        <h1 className='text-[#3563e9] text-3xl md:text-4xl font-bold'>MORENT</h1>
        
        {/* Search Box */}
        <div className="input relative w-full md:w-[492px]">
          <Image 
            src='/search-normal.png' 
            alt='Search icon' 
            width={24} 
            height={24} 
            className='absolute top-1/2 left-3 transform -translate-y-1/2'
          />
          <input 
            type="text" 
            title="search" 
            placeholder="Say something here" 
            className='border-2 border-[#e7eef6] w-full h-[44px] rounded-full p-2 pl-10 pr-12'
          />
          <Image 
            src='/filter.png' 
            alt='Filter icon' 
            width={24} 
            height={24} 
            className='absolute top-1/2 right-3 transform -translate-y-1/2'
          />
        </div>
      </div>

      {/* Navbar Right */}
      <div className="icons mt-4 md:mt-0">
        <Image 
          src='/Profil & Notification.png' 
          alt='Profile & Notification icon' 
          width={236} 
          height={44} 
        />
      </div>
    </div>
  );
}
