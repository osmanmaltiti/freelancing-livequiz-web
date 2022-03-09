import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 flex flex-row justify-between items-center p-2 text-white'>
        <p>Copyright @ 2022, liveQuiz</p>
        <div className='hidden lg:flex gap-2 flex-row text-sm'>
              <button className='my-1'>QUIZZES</button>
              <button className='my-1'>CATEGORY</button>
              <button className='my-1'>MULTIPLAYER</button>
              <button className='my-1'>CONTACT</button>
          </div>
        <div className='flex flex-row gap-2'>
              <button><IoLogoInstagram/></button>
              <button><IoLogoTwitter/></button>
              <button><IoLogoFacebook/></button>
          </div>
    </div>
  )
}

export default Footer;