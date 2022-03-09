import React, { useState } from 'react'

const CompetitionDetial = () => {
  const [ open, setOpen ] = useState(false);
  return (
    <div className='relative w-full flex-grow flex flex-col gap-4 pb-4 items-center p-8'>
        <img className='w-[8rem] aspect-square bg-red-300'/>
        <h2>UEFA EURO Cup Winner</h2>
        <p>Labore eiusmod dolore duis duis ullamco est. Occaecat minim elit in laborum dolor aliqua laboris labore ex commodo nulla. Nisi laboris quis quis do cupidatat aliquip veniam quis. Cillum esse est dolore officia consectetur proident ea et enim ea amet ullamco ad. Occaecat ut enim sint esse excepteur adipisicing. Deserunt magna ut do cupidatat deserunt veniam voluptate exercitation. Nostrud anim ipsum fugiat reprehenderit fugiat.</p>
        <div className='grid grid-cols-3 gap-4'>
            <span className='flex flex-col items-center'>
                <p>Hours</p>
                <p className='text-2xl font-semibold'>00</p>
            </span>
            <span className='flex flex-col items-center'>
                <p>Minutes</p>
                <p className='text-2xl font-semibold'>02</p>
            </span>
            <span className='flex flex-col items-center'>
                <p>Seconds</p>
                <p className='text-2xl font-semibold'>34</p>
            </span>
        </div>
        <span className='flex flex-col gap-1 items-center'>
            <p>PRIZE POOL: $1000</p>
            <p>ENTRY REQUIREMENTS: Gold Pass</p>
        </span>
        <button className='bg-green-400 font-bold py-2 px-16 rounded-md text-white' onClick={() => setOpen(!open)}>JOIN</button>

        {/* POPUPS */}
        <div style={{backgroundColor: '#00000069'}} className={`${open ? 'flex' : 'hidden'} absolute top-0 left-0 flex-col bg-white w-screen h-full`}>
            <div className='w-[70%] p-6 bg-white shadow-xl m-auto gap-16 flex flex-col items-center rounded-xl'>
                <p className='text-3xl font-bold text-center'>Are you sure you want to use a Gold Pass? </p>
                <span className='flex flex-col gap-2 w-[70%]'>
                    <button className='bg-green-500 py-2 rounded-md text-white font-semibold' >Yes</button>
                    <button className='bg-red-500 py-2 rounded-md text-white font-semibold' onClick={() => setOpen(!open)}>No</button>
                </span>
            </div>
        </div>
        {/* NO GOLD PASS */}
        <div style={{backgroundColor: '#00000069'}} className={`${open ? 'flex' : 'hidden'} absolute top-0 left-0 flex-col bg-white w-screen h-full`}>
            <div className='w-[70%] p-6 bg-white shadow-xl m-auto gap-16 flex flex-col items-center rounded-xl'>
                <p className='text-3xl font-bold text-center'>You don't have a Gold Pass? </p>
                <span className='flex flex-col gap-2 w-[70%]'>
                    <button className='bg-green-500 py-2 rounded-md text-white font-semibold' >Buy Gold Pass</button>
                    <button className='bg-red-500 py-2 rounded-md text-white font-semibold' onClick={() => setOpen(!open)}>Cancel</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default CompetitionDetial