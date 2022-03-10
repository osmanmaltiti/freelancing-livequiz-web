import React from 'react';
import avatar from '../Assets/avatar.png';
import fireworks from '../Assets/fireworks.png';

const Winner = () => {
  return (
    <div id='main-winner' className='flex pt-4 flex-col w-full flex-grow gap-4 items-center'>
      <span className='flex items-center flex-col text-white'>
        <p className='text-2xl'>UEFA EURO Cup Winner</p>
        <p className='text-xl font-bold'>Your Result</p>
      </span>
      <div className='relative w-[70%] lg:w-[50%] bg-orange-400 shadow-xl rounded-xl py-5 text-white text-lg items-center flex flex-col'>
        <img src={avatar} className='py-5'/>
        <img src={fireworks} className='absolute left-3'/>
        <img src={fireworks} className='absolute right-3 top-16'/>
        <img src={fireworks} className='absolute bottom-4'/>
        <p className='text-3xl font-medium'>Congratulations!</p>
        <p className='text-xl'>you are a winner</p>
        <p className='text-xl'>You win $1000</p>
      </div>
      
      <div className='gap-2 w-[90%] lg:w-[55%] shadow-xl pb-10 p-4 mb-4 flex flex-col items-center mx-auto'>
        {
          [1,2,3].map(item => <div key={item} className='w-[90%] lg:w-[70%] grid shadow-xl p-4 grid-cols-2 bg-gray-300 rounded-xl text-xl font-bold place-items-center'>
            <span className='flex flex-row gap-1 items-center'>
              <p>{item}</p>
              <img className='w-[2.5rem] h-[2.5rem] rounded-full' src={avatar}/>
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