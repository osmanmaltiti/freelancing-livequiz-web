import React from 'react';
import { ResultCard } from '../components/landing-page-cards';
import {FeaturedQuizCard} from '../components/landing-page-cards';

const Homepage = () => {
  return (
    <div className='w-full flex-grow flex flex-col gap-4 pb-4'>
        <img src='#' className='w-full bg-gray-200 aspect-video'/>
        
        <span className='w-full relative py-2 flex flex-col'>
            <hr className=' absolute w-[70%] top-[3rem] translate-x-[20%]'/>
            <div className='w-[50%] z-10 bg-white m-auto flex flex-col items-center text-3xl font-bold'>
                <p>Today's</p>
                <p>Featured Quiz</p>
            </div>
        </span>

        <div className='flex flex-col w-full gap-3'>
            <FeaturedQuizCard/>
            <FeaturedQuizCard/>
            <FeaturedQuizCard/>
            <FeaturedQuizCard/>
        </div>

        <div className='w-full bg-zinc-500 py-4 flex text-white flex-col items-center'>
            <p className='text-4xl font-bold'>Play & Win</p>
            <p className='text-3xl'>Exciting Prizes</p>
            <p className='text-2xl mt-2'>Sign Up to Compete</p>
            <p className='text-2xl'>with the World</p>
            <button className='bg-blue-700 p-3'>SIGN UP</button>
        </div>

        <span className='w-full relative py-2 flex flex-col'>
            <hr className=' absolute w-[70%] top-[3rem] translate-x-[20%]'/>
            <div className='w-[50%] z-10 bg-white m-auto flex flex-col items-center text-3xl font-bold'>
                <p>Last</p>
                <p>Week Results</p>
            </div>
        </span>        

        <div className='flex flex-col w-full'>
            <ResultCard/>
            <ResultCard/>
            <ResultCard/>
            <ResultCard/>
        </div>

    </div>
  )
}

export default Homepage