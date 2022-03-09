import React from 'react'
import Footer from './footer'
import { MobileNavbar } from './navbar'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col w-screen h-screen overflow-x-hidden'>
        <MobileNavbar/>
            {children}
        <Footer/>
    </div>
  )
}

export default Layout