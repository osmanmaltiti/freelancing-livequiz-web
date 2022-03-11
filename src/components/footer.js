import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full bg-[#262626] px-4 flex flex-row justify-between items-center p-2 py-4 text-white'>
        <p className='font-bold'>PRIVACY</p>
        <div className='hidden lg:flex gap-2 flex-row text-sm'>
              <button className='my-1' onClick={() => navigate('/quiz')}>QUIZZES</button>
              <button className='my-1'>CATEGORY</button>
              <button className='my-1'>MULTIPLAYER</button>
              <button className='my-1'>CONTACT</button>
          </div>
        <div className='flex flex-row gap-4'>
              <button><IoLogoInstagram/></button>
              <button><IoLogoTwitter/></button>
              <button><IoLogoFacebook/></button>
          </div>
    </div>
  )
}

export default Footer;