import React, { useState } from 'react';
import image from '../Assets/R (1).png';
import { useNavigate } from 'react-router-dom';

const CompetitionDetail = () => {
  const [ open, setOpen ] = useState(false);
  const [ openPass, setOpenPass ] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='relative w-full flex-grow flex flex-col gap-4 pb-4 items-center p-8 bg-[#E8E8E8]'>
        <img alt='' src={image} className='w-[8rem] aspect-square'/>
        <h2 className='text-2xl'>UEFA EURO Cup Winner</h2>
        <p className='lg:w-[70ch] font-medium '>Labore eiusmod dolore duis duis ullamco est. Occaecat minim elit in laborum dolor aliqua laboris labore ex commodo nulla. Nisi laboris quis quis do cupidatat aliquip veniam quis. Cillum esse est dolore officia consectetur proident ea et enim ea amet ullamco ad. Occaecat ut enim sint esse excepteur adipisicing. Deserunt magna ut do cupidatat deserunt veniam voluptate exercitation. Nostrud anim ipsum fugiat reprehenderit fugiat.</p>
        <div className='flex flex-row gap-2 font-medium text-lg'>
            <span className='flex flex-col items-center '>
                <p>Hours</p>
                <p className='text-4xl font-bold'>00</p>
            </span>
            <p className='row-span-2 text-4xl font-bold self-end'>:</p>
            <span className='flex flex-col items-center'>
                <p>Minutes</p>
                <p className='text-4xl font-bold'>02</p>
            </span>
            <p className='row-span-2 text-4xl font-bold self-end'>:</p>
            <span className='flex flex-col items-center'>
                <p>Seconds</p>
                <p className='text-4xl font-bold'>34</p>
            </span>
        </div>
        <span className='flex flex-col gap-1 items-center'>
            <p className='font-bold'>PRIZE POOL: $1000</p>
            <p className='font-medium'>Entry Requirement: <strong>Gold Pass</strong></p>
        </span>
        <button className='bg-[#95C23D] font-bold py-2 px-16 rounded text-white' onClick={() => setOpen(!open)}>JOIN</button>

        {/* POPUPS */}
        <div style={{backgroundColor: '#00000069'}} className={`${open ? 'flex' : 'hidden'} absolute top-0 left-0 flex-col bg-white w-screen h-full`}>
            <div className='w-[70%] lg:w-[50%] xl:w[40%] 2xl:w-[30%] p-6 bg-white shadow-xl m-auto gap-16 flex flex-col items-center rounded-xl'>
                <p className='text-3xl font-bold text-center'>Are you sure you want to use a Gold Pass? </p>
                <span className='flex flex-col gap-2 w-[70%] lg:flex-row'>
                    <button className='bg-[#95C23D] py-2 rounded-md flex-grow text-white font-semibold' onClick={() => { setOpenPass(!openPass); setOpen(!open)}} >Yes</button>
                    <button className='bg-[#CF0707] py-2 rounded-md text-white flex-grow font-semibold' onClick={() => setOpen(!open)}>No</button>
                </span>
            </div>
        </div>
        {/* NO GOLD PASS */}
        <div style={{backgroundColor: '#00000069'}} className={`${openPass ? 'flex' : 'hidden'} absolute top-0 left-0 flex-col bg-white w-screen h-full`}>
            <div className='w-[70%] lg:w-[50%] xl:w[40%] 2xl:w-[30%] p-6 bg-white shadow-xl m-auto gap-16 flex flex-col items-center rounded-3xl'>
                <p className='text-3xl text-center'>You don't have Gold Pass? </p>
                <span className='flex flex-col gap-2 w-[70%]'>
                    <button className='bg-[#95C23D] py-2 rounded-md text-white font-semibold' onClick={() => navigate('/quiz')} >Buy Gold Pass</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default CompetitionDetail;