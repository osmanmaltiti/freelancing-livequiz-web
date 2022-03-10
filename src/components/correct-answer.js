import React from 'react';
import wrong from '../Assets/cancel.png';
import correct from '../Assets/check-mark.png'

export const CorrectAnswer = () => {
  return (
    <div className='relative w-[50%] bg-gray-200 pt-10  p-4 mb-8 gap-2 rounded-lg flex flex-col items-center mx-auto'>
      <span className='hidden lg:flex flex-col items-center lg:absolute -top-10'>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-blue-500'>
            <p className='text-2xl font-bold text-white'>00:29</p>
          </div>
        </span>
        <p className='text-2xl font-bold'>ROUND 1</p>
        <p className='text-xl'>Your Answer is Correct</p>
        <img src={correct} className='w-[7rem] aspect-square'/ >
        <p className='text-2xl font-medium'>12x500=6000</p>
        <p className='text-xl font-bold'>Next Question</p>
        <p className='text-3xl font-bold'>00:10</p>
      </div>
  )
}

export const WrongAnswer = () => {
  return (
    <div className='relative w-[50%] bg-gray-200 pt-10 p-4 mb-8 gap-2 rounded-lg flex flex-col items-center mx-auto'>
      <span className='hidden lg:flex flex-col items-center lg:absolute -top-10'>
          <div className='grid place-items-center h-[7rem] aspect-square rounded-full bg-blue-500'>
            <p className='text-2xl font-bold text-white'>00:29</p>
          </div>
        </span>
        <p className='text-2xl font-bold'>ROUND 1</p>
        <p className='text-xl'>Your Answer is Wrong</p>
        <img src={wrong} className='w-[4.5rem] aspect-square'/>
        <p className='text-2xl font-medium'>0 Points</p>
        <p className='text-xl font-bold'>Next Question</p>
        <p className='text-3xl font-bold'>00:10</p>
      </div>
  )
}
export const MiniLeaderboard = () => {
  return (
    <div className='w-[90%] lg:w-[55%] bg-gray-200  p-4 mb-8 flex flex-col items-center mx-auto'>
        <p className='text-2xl font-bold mb-8'>Leader Board</p>
        <div className='w-[90%] grid grid-cols-2 border-b border-b-black border-t border-t-black py-1'>
          <p>Player</p>
          <p className='justify-self-end'>Score</p>
        </div>
        {
          [1,2,3,4].map(item => <div key={item} className='w-[90%] grid py-2 grid-cols-2  border-b border-b-black border-t border-t-gray-400'>
            <span className='flex flex-row gap-1 items-center'>
              <img className='w-[2.5rem] h-[2.5rem] bg-red-500 rounded-full'/>
              <p>Ahsan</p>
            </span>
            <p className='justify-self-end'>119,600</p>
          </div>)
        }
        
      </div>
  )
}

