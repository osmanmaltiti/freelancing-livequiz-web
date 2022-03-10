import React from 'react'
import Footer from './footer'
import { DesktopNavbar, MobileNavbar } from './navbar'
import useMedia from '../hooks/useMedia';

const Layout = ({ children }) => {
  const lg = useMedia('(min-width: 1024px)');
  return (
    <div className='flex flex-col w-screen h-screen overflow-x-hidden scrollbar-thin lg:scrollbar-thumb-black'>
        {lg ? <DesktopNavbar/> : <MobileNavbar/>}
            {children}
        <Footer/>
    </div>
  )
}

export default Layout