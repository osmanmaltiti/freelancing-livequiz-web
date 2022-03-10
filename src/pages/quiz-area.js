import React from 'react'
import { CorrectAnswer, MiniLeaderboard, WrongAnswer } from '../components/correct-answer'

const QuizArea = () => {
  return (
    <div id='main-quiz' className='flex-grow flex flex-col gap-4 py-4 w-full mx-auto'>
      <div className='grid grid-cols-3 lg:grid-cols-2 w-full lg:place-items-center'>
        <span className='flex flex-col text-white items-center'>
          <p>Score</p>
          <h2 className='text-3xl font-bold '>15000</h2>
        </span>
        <span className='flex flex-col items-center lg:hidden top-24'>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-blue-500'>
            <p className='text-2xl font-bold text-white'>00:29</p>
          </div>
        </span>
        <span className='flex flex-col items-center text-white lg:justify-self-center'>
          <p>Prize Money</p>
          <h2 className='text-3xl font-bold'>$1000</h2>
        </span>
      </div>

      <div className='relative w-[90%] lg:w-[50%] bg-gray-200  p-4 lg:pt-10 mb-8 gap-2 rounded-lg flex flex-col items-center mx-auto'>
        <span className='hidden lg:flex flex-col items-center lg:absolute -top-10'>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-blue-500'>
            <p className='text-2xl font-bold text-white'>00:29</p>
          </div>
        </span>
        <p className='text-2xl font-bold'>ROUND 1</p>
        <p>Nisi cillum ullamco reprehenderit excepteur ea labore tempor ea voluptate commodo sunt. Proident est amet exercitation duis ad quis laborum velit in irure ut labore. Reprehenderit excepteur Lorem esse irure. Lorem et labore irure occaecat ipsum nulla elit sit quis cillum officia. Labore quis laborum cillum voluptate qui ad veniam sunt irure consectetur laborum.</p>
        <span className='w-full flex flex-col gap-2 items-center lg:grid lg:grid-cols-2 lg:place-items-center'>
          <label htmlFor='option1' className='w-3/4 lg:w-[95%] flex flex-row items-center justify-center border border-black rounded-full h-[3.5rem] gap-2 bg-white shadow-md  hover:cursor-pointer focus-within:bg-sky-100 
              focus-within:border-solid focus-within:border-sky-300 focus-within:border-2'>
                <input className=''
                       id='option1' 
                       type='radio' 
                       name='quiz' />
                <p className='text-sm opacity-60'>5 feet</p>
          </label>
          <label htmlFor='option2' className='w-3/4 lg:w-[95%] flex flex-row items-center justify-center border border-black rounded-full h-[3.5rem] gap-2 bg-white shadow-md  hover:cursor-pointer focus-within:bg-sky-100 
              focus-within:border-solid focus-within:border-sky-300 focus-within:border-2'>
                <input className=''
                       id='option2' 
                       type='radio' 
                       name='quiz' />
                <p className='text-sm opacity-60'>6 feet</p>
          </label>
          <label htmlFor='option3' className='w-3/4 lg:w-[95%] flex flex-row items-center justify-center border border-black rounded-full h-[3.5rem] gap-2 bg-white shadow-md  hover:cursor-pointer focus-within:bg-sky-100 
              focus-within:border-solid focus-within:border-sky-300 focus-within:border-2'>
                <input className=''
                       id='option3' 
                       type='radio' 
                       name='quiz' />
                <p className='text-sm opacity-60'>7 feet</p>
          </label>
          <label htmlFor='option4' className='w-3/4 lg:w-[95%] flex flex-row items-center justify-center border border-black rounded-full h-[3.5rem] gap-2 bg-white shadow-md  hover:cursor-pointer focus-within:bg-sky-100 
              focus-within:border-solid focus-within:border-sky-300 focus-within:border-2'>
                <input className=''
                       id='option4' 
                       type='radio' 
                       name='quiz' />
                <p className='text-sm opacity-60'>8 feet</p>
          </label>
          {/* POPUP */}
          <p className='text-xl col-span-2 italic mx-auto text-cyan-500'>Wait for the other participants to answer</p>
        </span>
      </div>
    </div>
  )
}

export default QuizArea