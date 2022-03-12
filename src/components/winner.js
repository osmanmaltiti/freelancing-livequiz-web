import React from 'react';
import avatar from '../Assets/avatar.png';
import fireworks from '../Assets/fireworks.png';

const Winner = () => {
  return (
    <div className='flex pt-4 lg:pt-12 bg-[#E8E8E8] flex-col w-full flex-grow gap-4 items-center'>
      <span className='flex items-center flex-col text-white'>
        <p className='text-3xl text-[#36413E]'>UEFA EURO Cup Winner</p>
        <p className='text-3xl font-bold text-[#36413E]'>Your Result</p>
      </span>
      <div className='relative w-[70%] lg:w-[25rem] lg:aspect-square bg-[#FC9228] shadow-xl rounded-2xl py-5 text-white text-lg items-center flex flex-col'>
        <img alt='' src={avatar} className='py-5'/>
        <img alt='' src={fireworks} className='absolute left-3'/>
        <img alt='' src={fireworks} className='absolute right-3 top-4 scale-125'/>
        <img alt='' src={fireworks} className='absolute top-28 left-4 scale-75'/>
        <p className='text-2xl'>Congratulations!</p>
        <p className='text-2xl'>you are a winner</p>
        <p className='text-2xl'>You win $1000</p>
      </div>
      
      <div className='gap-3 w-[90%] lg:w-[55%] pb-10 p-4 mb-4 flex flex-col items-center mx-auto'>
        {
          [1,2,3].map(item => <div key={item} className='w-[90%] lg:w-[70%] grid shadow-md p-4 grid-cols-2 bg-[#D8D8D8] rounded-xl text-xl font-bold place-items-center'>
            <span className='flex flex-row gap-1 items-center justify-self-start'>
              <p>{item}</p>
              <img alt='' className='w-[2.5rem] h-[2.5rem] rounded-full' src={avatar}/>
              <p>Ahsan</p>
            </span>
            <p className='justify-self-end'>119,600</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default Winner