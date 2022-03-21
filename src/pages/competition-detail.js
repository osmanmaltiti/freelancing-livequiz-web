import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pass from '../API/POST-pass';
import Competition from '../API/GET-competition';

const CompetitionDetail = () => {
  const [ open, setOpen ] = useState(false);
  const [ openPass, setOpenPass ] = useState(false);
  const { buyPass, usesPass } = Pass();
  const navigate = useNavigate();
  const { checkCompetition } = Competition();
  const comp = useSelector(state => state.competition.currentCompetition);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
      const timer = setTimeout(() => {
          let difference = new Date(comp.start_dt) - new Date();
          let timeLeft = {};
          if (difference > 0) {
              timeLeft = {
                  hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                  minutes: Math.floor((difference / 1000 / 60) % 60),
                  seconds: Math.floor((difference / 1000) % 60)
              };
          }
          setTimeLeft(timeLeft);
      }, 1000);

      return () => clearTimeout(timer);
    })

  useEffect(() => {
      if(comp.length === 0) navigate('/');

      //eslint-disable-next-line
  }, []);

  const CheckCompetition = () => {
    checkCompetition((status) => {
        console.log(status)
        if(status === "100"){
            setOpen(!open);
        } else {
            setOpenPass(!openPass);
        }
    })
  }

  const UsePass = () => {
    usesPass((status) => {
        console.log(status)
        if(status === "100"){ 
            setOpen(!open);
            navigate('/quiz');
        } else {
            setOpenPass(!openPass);
            setOpen(!open);
        }
    })
  }

  const BuyPass = () => {
    buyPass((status) => {
        console.log(status)
        if(status === "100") {
            setOpenPass(!openPass);
            setOpen(!open)
        }
        else {
            alert('Purchase failed');
            setOpenPass(!openPass)
            setOpen(!open);
        }
    })
  }

  return (
    <div className='relative w-full flex-grow flex flex-col gap-4 pb-4 items-center p-8 bg-[#E8E8E8]'>
        <img alt='' src={comp.img} className='w-[8rem] rounded-xl aspect-square object-cover'/>
        <h2 className='text-2xl'>{comp.title}</h2>
        <p className='lg:w-[70ch] font-medium text-center'>{comp.detail_des}</p>
        <div className='flex flex-row gap-2 font-medium text-lg'>
            <span className='flex flex-col items-center '>
                <p>Hours</p>
                <p className='text-4xl font-bold'>
                    {timeLeft.hours === undefined ? '00' : timeLeft.hours > 9 ? timeLeft.hours : '0'+ timeLeft.hours}
                </p>
            </span>
            <p className='row-span-2 text-4xl font-bold self-end'>:</p>
            <span className='flex flex-col items-center'>
                <p>Minutes</p>
                <p className='text-4xl font-bold'>
                    {timeLeft.minutes === undefined ? '00' : timeLeft.minutes > 9 ? timeLeft.minutes : '0'+ timeLeft.minutes}
                </p>
            </span>
            <p className='row-span-2 text-4xl font-bold self-end'>:</p>
            <span className='flex flex-col items-center'>
                <p>Seconds</p>
                <p className='text-4xl font-bold'>
                    {timeLeft.seconds === undefined ? '00' : timeLeft.seconds > 9 ? timeLeft.seconds : '0'+ timeLeft.seconds}
                </p>
            </span>
        </div>
        <span className='flex flex-col gap-1 items-center'>
            <p className='font-bold'>PRIZE POOL: ${comp.price}</p>
            <p className='font-medium'>Entry Requirement: <strong>Gold Pass</strong></p>
        </span>
        <button className='bg-[#95C23D] font-bold py-2 px-16 rounded text-white t-4 h-[3rem] disabled:cursor-not-allowed'
        onClick={() => { CheckCompetition()} }>
             <p>JOIN</p>
        </button>

        {/* POPUPS - USE GOLD PASS */}
        <div style={{backgroundColor: '#00000069'}} className={`${open ? 'flex' : 'hidden'} absolute top-0 left-0 flex-col bg-white w-screen h-full`}>
            <div className='w-[70%] lg:w-[50%] xl:w[40%] 2xl:w-[30%] p-6 bg-white shadow-xl m-auto gap-16 flex flex-col items-center rounded-xl'>
                <p className='text-3xl font-bold text-center'>Are you sure you want to use a Gold Pass? </p>
                <span className='flex flex-col gap-2 w-[70%] lg:flex-row'>
                    <button className='bg-[#95C23D] py-2 rounded-md flex-grow text-white font-semibold'
                    onClick={() => UsePass()} >Yes</button>
                    <button className='bg-[#CF0707] py-2 rounded-md text-white flex-grow font-semibold' onClick={() => setOpen(!open)}>No</button>
                </span>
            </div>
        </div>
        {/* NO GOLD PASS */}
        <div style={{backgroundColor: '#00000069'}} className={`${openPass ? 'flex' : 'hidden'} absolute top-0 left-0 flex-col bg-white w-screen h-full`}>
            <div className='w-[70%] lg:w-[50%] xl:w[40%] 2xl:w-[30%] p-6 bg-white shadow-xl m-auto gap-16 flex flex-col items-center rounded-3xl'>
                <p className='text-3xl text-center'>You don't have Gold Pass? </p>
                <span className='flex flex-col gap-2 w-[70%]'>
                    <button className='bg-[#95C23D] py-2 rounded-md text-white font-semibold'
                    onClick={() => BuyPass()} >Buy Gold Pass</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default CompetitionDetail;