import React from 'react';
import { ResultCard } from '../components/landing-page-cards';
import {FeaturedQuizCard} from '../components/landing-page-cards';
import banner from '../Assets/Banner Image.png';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full flex-grow flex flex-col bg-[#ccc5c587]'>
        <img src={banner} className='w-full object-cover bg-white aspect-video lg:h-[20rem]'/>
        
        <span>
        <span className='w-full bg-white relative py-2 flex flex-col'>
            <hr className=' absolute w-[70%] top-[3rem] translate-x-[20%]'/>
            <div className='w-[50%] z-10 bg-white m-auto flex flex-col items-center text-3xl font-bold'>
                <p>Today's</p>
                <p>Featured Quiz</p>
            </div>
        </span>

        <div className='flex flex-col bg-white py-4 w-full gap-3 lg:grid lg:grid-cols-2'>
            <FeaturedQuizCard/>
            <FeaturedQuizCard/>
            <FeaturedQuizCard/>
            <FeaturedQuizCard/>
            <FeaturedQuizCard/>
            <FeaturedQuizCard/>
        </div>
        </span>
        <div className='w-full py-4 flex text-black flex-col items-center'>
            <p className='text-4xl font-bold'>Play & Win</p>
            <p className='text-3xl'>Exciting Prizes</p>
            <p className='text-2xl mt-2'>Sign Up to Compete</p>
            <p className='text-2xl'>with the World</p>
            <button className='bg-blue-500 p-3 text-white mt-2' onClick={() => navigate('/signin')}>SIGN UP</button>
        </div>

        <span className='w-full relative py-2 flex flex-col bg-white'>
            <hr color='black' className=' absolute w-[70%] top-[3rem] translate-x-[20%]'/>
            <div className='w-[50%] z-10 bg-white m-auto flex flex-col items-center text-3xl font-bold'>
                <p>Last</p>
                <p>Week Results</p>
            </div>

            <div className='flex mt-5  flex-col w-full bg-white lg:grid lg:grid-cols-2 lg:gap-2'>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
            </div>
        </span>        

    </div>
  )
}

export default Homepage