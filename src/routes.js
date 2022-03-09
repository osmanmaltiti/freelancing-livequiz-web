import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Footer from './components/footer';
import Layout from './components/layout';
import { DesktopNavbar, MobileNavbar } from './components/navbar';
import CompetitionDetial from './pages/competition-detial';
import Homepage from './pages/homepage';
import SignIn from './pages/signin-page';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout><CompetitionDetial/></Layout>}/>
        <Route path='signin' element={<SignIn/>}/>
    </Routes>
  )
}

export default Routing;