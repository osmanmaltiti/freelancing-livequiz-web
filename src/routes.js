import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Layout from './components/layout';
import Winner from './pages/results';
import CompetitionDetail from './pages/competition-detail';
import Homepage from './pages/homepage';
import QuizArea from './pages/quiz-area';
import SignIn from './pages/signin-page';
import Protected from './components/protected';
import Lobby from './pages/Lobby';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout><Homepage/></Layout>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/competitiondetail' 
        element={<Protected>
                  <Layout><CompetitionDetail/></Layout>
                </Protected>}/>
        <Route path='/quiz' 
        element={<Protected>
                  <Layout><QuizArea/></Layout>
                </Protected>}/>
        <Route path='/results' 
        element={<Protected>
                  <Layout><Winner/></Layout>
                </Protected>}/>
        <Route path='/lobby' 
        element={<Protected>
                  <Layout><Lobby/></Layout>
                </Protected>}/>
    </Routes>
  )
}

export default Routing;