import React from 'react';

export const FeaturedQuizCard = () => {
  return (
    <div className='grid grid-cols-40/60 place-items-center'>
        <span className='h-[10rem] w-[95%] bg-gray-600 rounded-md'></span>
        <span className='h-[10rem] w-[95%] bg-gray-600 rounded-md'></span>
    </div>
  )
}


export const ResultCard = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-40/60 place-items-center border-b border-black'>
          <span className='h-[90%] w-[90%] rounded-md bg-blue-200'></span>
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