import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Layout from './components/layout';
import Winner from './components/winner';
import CompetitionDetail from './pages/competition-detail';
import Homepage from './pages/homepage';
import QuizArea from './pages/quiz-area';
import SignIn from './pages/signin-page';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout><Homepage/></Layout>}/>
        <Route path='/competitiondetail' element={<Layout><CompetitionDetail/></Layout>}/>
        <Route path='/quiz' element={<Layout><QuizArea/></Layout>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/results' element={<Layout><Winner/></Layout>}/>
    </Routes>
  )
}

export default Routing;