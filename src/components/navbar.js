import React, { useState } from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoMenu, IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='sticky z-20 top-0 w-full flex flex-row justify-between items-center p-2 bg-white'>
        <h1 className='text-3xl font-semibold'>Live Quiz</h1>
        <button onClick={() => setOpen(!open)}><IoMenu className='text-3xl'/></button>
        <div className={`${ open ? 'h-[152px]' : 'h-0'} w-full z-20 transition-all fixed flex gap-2 overflow-hidden flex-col right-0 top-[3.25rem] bg-gray-400`}>
            <button className='my-1' onClick={() => navigate('/quiz')}>QUIZZES</button>
            <button className='my-1'>CATEGORY</button>
            <button className='my-1'>MULTIPLAYER</button>
            <button className='my-1'>CONTACT</button>
        </div>
    </div>
  )
}

export const DesktopNavbar = () => {
  const navigate = useNavigate();
     return (
      <div className='w-full flex flex-row justify-between items-center p-2 bg-white'>
          <h1 className='text-3xl font-semibold whitespace-nowrap'>Live Quiz</h1>
          <div className='flex gap-2 flex-row text-sm'>
              <button className='my-1' onClick={() => navigate('/quiz')}>QUIZZES</button>
              <button className='my-1'>CATEGORY</button>
              <button className='my-1'>MULTIPLAYER</button>
              <button className='my-1'>CONTACT</button>
          </div>
          <div className='flex flex-row gap-2'>
              <IoSearch/>
              <IoLogoInstagram/>
              <IoLogoTwitter/>
              <IoLogoFacebook/>
          </div>
      </div>
    )
  }
