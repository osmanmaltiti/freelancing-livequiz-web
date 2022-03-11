import React from 'react';
import wrong from '../Assets/cancel.png';
import correct from '../Assets/check-mark.png';
import avatar from '../Assets/avatar.png';

export const QuestionCard = (props) => {
  return(
  <>
      <span className='hidden lg:flex flex-col items-center lg:absolute -top-10'>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-[#0084A4]'>
            <p className='text-2xl font-bold text-white'>00:{props.counter}</p>
          </div>
        </span>
        <p className='text-2xl font-semibold text-[#0084A4]'>ROUND {props.round}</p>
        <p>{props.quiz}</p>
        <span className='w-full flex flex-col gap-2 items-center lg:grid lg:grid-cols-2 lg:place-items-center'>
          {
            props.options.map((option, index) => 
                <label key={option.name} htmlFor={option.name} className=' w-3/4 lg:w-[95%] flex flex-row items-center justify-center rounded-full h-[3.5rem] mt-1 bg-[#F2F2F2] shadow-md  hover:cursor-pointer'>
                  <input className='absolute'
                        id={option.name} 
                        type='radio' 
                        name={props.round}
                        value={option.name}
                        onChange={props.setAnswer} />
                  <span className='text-base text-black font-bold rounded-full flex flex-col items-center opacity-60 option'>
                    <p>{option.name}</p>
                  </span>
                </label>)
          }
          {/* POPUP */}
          <p className='text-xl col-span-2 mx-auto text-[#0084A4]'>Wait for the other participants to answer</p>
        </span>
  </>
  )
}

export const CorrectAnswer = () => {
  return (
    <div className='relative w-[90%] lg:w-[50%] bg-white pt-10  p-4 mb-8 gap-2 rounded-lg flex flex-col items-center mx-auto'>
      <span className='hidden lg:flex flex-col items-center lg:absolute -top-10'>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-[#0084A4]'>
            <p className='text-2xl font-bold text-white'>00:29</p>
          </div>
        </span>
        <p className='text-2xl font-bold text-[#0084A4]'>ROUND 1</p>
        <p className='text-xl'>Your Answer is Correct</p>
        <img src={correct} className='w-[7rem] aspect-square'/>
        <p className='text-2xl font-medium'>12x500=6000</p>
        <p className='text-xl font-bold'>Next Question</p>
        <p className='text-lg italic'>in 10 seconds</p>
      </div>
  )
}

export const WrongAnswer = () => {
  return (
    <div className='relative w-[90%] lg:w-[50%] bg-white pt-10 p-4 mb-8 gap-2 rounded-lg flex flex-col items-center mx-auto'>
      <span className='hidden lg:flex flex-col items-center lg:absolute -top-10'>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-[#0084A4]'>
            <p className='text-2xl font-bold text-white'>00:29</p>
          </div>
        </span>
        <p className='text-2xl font-bold text-[#0084A4]'>ROUND 1</p>
        <p className='text-xl'>Your Answer is Wrong</p>
        <img src={wrong} className='w-[4.5rem] aspect-square'/>
        <p className='text-2xl font-medium'>0 Points</p>
        <p className='text-xl font-bold'>Next Question</p>
        <p className='text-lg italic'>in 10 seconds</p>
      </div>
  )
}
export const MiniLeaderboard = () => {
  return (
    <div className='w-[90%] lg:w-[55%] bg-white  p-4 mb-8 flex flex-col items-center mx-auto'>
        <p className='text-2xl font-bold mb-8'>Leader Board</p>
        <div className='w-[90%] grid grid-cols-2 border-b border-b-black border-t border-t-black py-1'>
          <p>Player</p>
          <p className='justify-self-end'>Score</p>
        </div>
        {
          [1,2,3,4].map(item => <div key={item} className='w-[90%] grid py-2 grid-cols-2  border-b border-b-black border-t border-t-gray-400'>
            <span className='flex flex-row gap-1 items-center'>
              <p className='font-medium'>{item}</p>
              <img className='w-[2.5rem] h-[2.5rem] rounded-full' src={avatar}/>
              <p>Ahsan</p>
            </span>
            <p className='justify-self-end'>119,600</p>
          </div>)
        }
        
      </div>
  )
}

