import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../Assets/R (1).png';

export const FeaturedQuizCard = () => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-40/60 place-items-center'>
        <span className='h-full w-[95%] grid place-items-center bg-teal-400 rounded-md'>
          <img src={ image } className='w-[7rem] aspect-square'/>
        </span>
        <span className='h-full flex flex-col gap-1 p-2 w-[95%] bg-teal-400 rounded-md'>
          <p className='text-lg lg:text-xl font-bold'>UEFA EURO Cup Winner</p>
          <p className='text-xl lg:text-2xl font-bold'>PRIZE POOL: $1,000</p>
          <p className='font-semibold'>MARCH 03, 2022 - 6:00 PM</p>
          <button className='bg-white rounded-md font-medium py-1' onClick={() => navigate('/competitiondetail')}>VIEW DETAILS</button>
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
    <div className=''>
      <div className='grid grid-cols-40/60 place-items-center border-b border-black'>
          <span className='h-[70%] w-[6rem] rounded-md bg-blue-200'>
            <img src={ image }/>
          </span>
          <span className='h-fit py-4 w-full flex flex-col'>
            <h2 className='text-2xl font-bold'>Umar</h2>
            <h2>Pakistan</h2>
            <h2>Prize Won: $500</h2>
            <h2>March 03, 2020</h2>
          </span>
      </div>
    </div>
  )
}