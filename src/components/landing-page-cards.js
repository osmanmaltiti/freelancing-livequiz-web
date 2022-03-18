import React from 'react';
import image from '../Assets/R (1).png';
import { useNavigate } from 'react-router-dom';
import '../styles/cards.css';

export const FeaturedQuizCard = () => {
  const navigate = useNavigate();
  return (
    <div id='main-featured-card' className='grid grid-cols-40/60 text-white place-items-center'>
        <span className='h-full w-[95%] grid place-items-center rounded-md ml-auto'>
          <img src={ image } alt='' className='w-[7rem] aspect-square'/>
        </span>
        <span className='h-full flex flex-col gap-1 p-2 w-[95%] bg-teal-400 rounded-md'>
          <p className='text-lg lg:text-xl font-bold'>UEFA EURO Cup Winner</p>
          <p className='text-xl lg:text-2xl font-bold'>PRIZE POOL: $1,000</p>
          <p className='font-semibold'>MARCH 03, 2022 - 6:00 PM</p>
          <button id='f-card-button' className='bg-white rounded-md font-medium py-1' onClick={() => navigate('/competitiondetail')}>VIEW DETAILS</button>
          <div className='flex flex-row gap-2'>
            <span className='flex flex-col items-center'>
              <h2 className='text-2xl font-bold'>02</h2>
              <p>hours</p>
            </span>
            <span className='flex flex-col items-center'>
              <h2 className='text-2xl font-bold'>20</h2>
              <p>minutes</p>
            </span>
            <span className='flex flex-col items-center'>
              <h2 className='text-2xl font-bold'>01</h2>
              <p>seconds</p>
            </span>
          </div>
        </span>
    </div>
  )
}


export const ResultCard = () => {
  return (
      <div id='main-results-card' className='grid grid-cols-40/60 place-items-center py-6 border-b border-[#707070]'>
          <span className='h-[90%] flex flex-col w-[70%] rounded-md bg-[#AEEBFF]'>
            <img src={ image } alt='' className='w-[7rem] m-auto'/>
          </span>
          <span className='h-fit py-4 w-full flex flex-col'>
            <h2 className='text-3xl font-bold'>Umar</h2>
            <h2>Pakistan</h2>
            <h2 className='text-[#009514] text-lg'>Prize Won: $500</h2>
            <h2 className='mt-3 font-bold'>March 03, 2020</h2>
          </span>
      </div>
  )
}

export const FeaturedQuizCardAlt = (props) => {
  return (
    <div id='alt-featured-card' className='flex flex-col text-white items-center rounded-xl overflow-hidden'>
        <span className='h-full w-full grid place-items-center ml-auto pt-4'>
          <img alt='' src={ props.image } className='w-[7rem] aspect-square object-cover rounded-xl'/>
          <p className='text-sm text-center md:text-lg lg:text-xl text-black font-bold'>{props.title}</p>
          <p className='text-base md:text-xl text-center lg:text-2xl font-bold'>PRIZE POOL: ${props.price}</p>
        </span>
        <div className='h-full flex flex-col gap-1 p-2 w-full bg-black items-center'>
          <p className='font-medium text-sm md:text-base text-center md:font-semibold'>MARCH 03, 2022 - 6:00 PM</p>
          <div className='flex flex-row gap-2'>
            <div className='flex flex-col items-center'>
              <h2 className='time text-lg md:text-2xl font-bold'>02</h2>
              <p className='time text-sm'>hours</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='time text-lg md:text-2xl font-bold'>20</h2>
              <p className='time text-sm'>minutes</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='time text-lg md:text-2xl font-bold'>01</h2>
              <p className='time text-sm'>seconds</p>
            </div>
          </div>
          <span className='w-[95%] rounded-full'>
            <button className='text-white rounded-md font-medium py-1 w-full' onClick={props.navigate}>VIEW DETAILS</button>
          </span>
        </div>
    </div>
  )
}

export const ResultCardAlt = () => {
  return (
      <div id='alt-results-card' className='grid grid-cols-40/60 place-items-center py-2 m-2 rounded-xl border-2 border-[#707070]'>
          <span className='h-[90%] flex flex-col w-[70%] border-r border-black'>
            <img alt='' src={ image } className='w-[7rem] m-auto'/>
          </span>
          <span className='h-fit py-2 w-full flex flex-col'>
            <h2 className='text-2xl lg:text-3xl font-bold'>Umar</h2>
            <h2>Pakistan</h2>
            <p className='text-sm lg:text-lg'>Prize Won: $500</p>
            <h2 className='mt-1 font-medium text-sm lg:txt-base'>March 03, 2020</h2>
          </span>
      </div>
  )
}