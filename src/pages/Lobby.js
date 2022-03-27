import React, { useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import QuizArea from './quiz-area';
import quizAudio from '../Assets/audio/quiz_game.mp3';


const Lobby = () => {
  const [time, setTime] = useState();
  const [socket, setSocket] = useState();
  const [quiz, setQuiz] = useState(false);
  const [user, setUser] = useState();
  const comp = useSelector(state => state.competition.currentCompetition);
  const audioRef = useRef(null);
  const mute = useSelector(state => state.mute.mute)

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
    const connect = io("http://localhost:5000");
    setSocket(connect)
    document.body.addEventListener('click', () => {
      document.getElementById('comp-music').play();
    })
    return () => {
      connect.disconnect()
    }
    //eslint-disable-next-line
  }, []);

  if(typeof socket !== 'undefined'){
    socket.once("connect", () => {
      console.log(socket.id)
      
      const joinRoom = () => {
        const roomname = comp.title;
        const name = user.first_name;

        socket.emit("join-room", { room: roomname, name });
      }
      joinRoom();

      const interval = setInterval(() => { 
          socket.emit("get-game-time");
          socket.on("result", (data) => {
            data.time === '00:00:00' ? next() :
            setTime(data.time)
          })
      }, 1000);

      socket.on("players-joined", data => console.log(data));

      const next = () => {
        clearInterval(interval);
        setQuiz(true)
      }
    });
  }
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
    <>
    {
      !quiz ?
        <div className="w-full flex-grow flex flex-col bg-[#E8E8E8] py-6">
          <h2 className='w-[18ch] mx-auto text-center text-3xl font-bold'>The game will start in {time ? time : "00:00:00"}</h2>
            <div className="w-full flex flex-col mt-4 items-center"> 
              <h3 className="text-2xl font-bold">Rules</h3> 
              <div className="flex-grow w-full flex flex-col"> 
                <ul className='flex flex-col mx-auto list-decimal' >
                    <li>Each question has a 40 seconds time limit.</li>
                    <li>Click on the answer. Choices are disabled after one click</li>
                    <li>Five Questions</li>
                </ul>
              </div> 
            </div> 
            <audio ref={audioRef} id='comp-music' autoPlay loop controlsList='nodownload' hidden {...mutedFunc()}>
              <source src={quizAudio}/>
            </audio>
        </div>
        :
        <QuizArea socket = {socket}/>
      }
    </>
  )
}

export default Lobby