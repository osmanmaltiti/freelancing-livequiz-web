import React, { useEffect, useRef, useState } from 'react';
import { FeaturedQuizCardAlt, ResultCardAlt } from '../components/landing-page-cards';
import banner from '../Assets/Banner Image.png';
import { useNavigate } from 'react-router-dom';
import Competition from '../API/GET-competition';
import { useDispatch, useSelector } from 'react-redux';
import { setCompetition } from '../redux/competition-slice';
import Results from '../API/GET-results';
import homeAudio from '../Assets/audio/home.mp3';

const Homepage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { getCompetitions } = Competition();
    const { getLeaderboards } = Results();
    const [ user, setUser ] = useState();
    const comps = useSelector(state => state.competition.allCompetition);
    const leaderboard = useSelector(state => state.results.leaderboard)
    const audioRef = useRef(null);
    const mute = useSelector(state => state.mute.mute)

    useEffect(() => {
        getCompetitions();
        getLeaderboards();
        let currentUser = localStorage.getItem("currentUser");
        setUser(currentUser);
        document.body.addEventListener('click', () => {
            document.getElementById('comp-music').play();
        })
        //eslint-disable-next-line
    }, []);

    const mutedFunc = () => {
        if(mute === true){
          let state = {
            muted: true
          }
          return state
        } else {
          let state = {
            muted: false
          }
          return state
        }
      }

  return (
    <div className='w-full flex-grow flex flex-col bg-[#959595]'>
        <span className='relative'>
            <img alt='' src={banner} className='w-full object-cover bg-white aspect-video lg:h-[20rem]'/>
            <div className='absolute bg-white p-2 w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-[50%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <div className='w-full gap-2 flex flex-col items-center justify-center h-full border border-[#36413E]'>
                    <p className='text-3xl italic font-medium text-[#19381F]'>Soccer Sport Quizzes</p>
                    <hr color='black' className='w-[80%]'/>
                    <p className='text-2xl italic'>Win unlimited Prizes</p>
                </div>
            </div>
        </span>
        
        <span>
        <div className='relative w-full py-4 z-10 bg-[#E8E8E8] m-auto flex flex-col items-center text-3xl font-bold'>
                <hr className='absolute top-1/2 translate-y-1/2 w-[90%] h-[0.1rem] z-10 bg-[#707070]'/>
                <span className='flex flex-col items-center bg-[#E8E8E8] text-[#36413E] z-10 px-6'>
                    <p>Today's</p>
                    <p>Featured Quiz</p>
                </span>
            </div>

        <div className='grid flex-col grid-cols-2 lg:grid-cols-3 bg-[#E8E8E8] pt-4 pb-16 px-2 w-full lg:mx-auto lg:px-[10%] gap-2 lg:grid'>
            {comps.map(item => 
                <FeaturedQuizCardAlt 
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    price={item.price}
                    date = {item.start_dt}
                    id={item.id}
                    navigate={() => {
                        dispatch(setCompetition(item.id));
                        navigate('/competitiondetail')
                    }}
                />)
            }
        </div>
        </span>
        <div className='w-full py-4 flex text-white flex-col items-center'>
            <p className='text-4xl font-bold'>Play & Win</p>
            <p className='text-3xl'>Exciting Prizes</p>
            <p className='text-2xl mt-2'>Sign Up to Compete</p>
            <p className='text-2xl'>with the World</p>
            <button className={`${user ? 'hidden' : 'flex'} bg-[#0361CC] p-3 px-12 text-white mt-2`} onClick={() => navigate('/signin')}>SIGN UP</button>
        </div>

        <span className='w-full relative pt-14 pb-32 flex flex-col bg-[#E8E8E8]'>
            <div className='relative w-full z-10 bg-[#E8E8E8] m-auto flex flex-col items-center text-3xl font-bold'>
                <hr className='absolute top-1/2 translate-y-1/2 w-[90%] h-[0.1rem] z-10 bg-[#707070]'/>
                <span className='flex flex-col items-center bg-[#E8E8E8] text-[#36413E] z-10 px-6'>
                    <p className='text-center'>Last</p>
                    <p className='text-center'>Week Results</p>
                </span>
            </div>

            <div className='grid grid-cols-2 mt-5 flex-col w-full bg-[#E8E8E8] lg:mx-auto lg:px-[10%] lg:grid lg:grid-cols-2 lg:gap-2'>
                {leaderboard?.results?.map(item => 
                    <ResultCardAlt 
                        key={item.id}
                        name={item.user_name}
                        img={item.user_pic}
                        score={item.user_score} />)}
            </div>
        </span>        
        <audio id='comp-music' autoPlay ref={audioRef} loop hidden controlsList='nodownload' {...mutedFunc()}>
              <source src={homeAudio}/>
        </audio>
    </div>
  )
}

export default Homepage