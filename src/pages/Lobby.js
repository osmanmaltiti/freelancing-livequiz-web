import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
 
const Lobby = () => {
  const [time, setTime] = useState();
  const [ctrl] = useState();
  const [socket, setSocket] = useState();

  useEffect(() => {
    const connect = io("http://localhost:5000");
    setSocket(connect)
    
    //eslint-disable-next-line
  }, []);

  if(typeof socket !== 'undefined'){
    socket.on("connect", () => {
      console.log(socket.id)
      
      const createRoom = () => {
        const roomname = 'Laliga';
        const name = 'Zahir';

        socket.emit("create-room", { room: roomname, name });
      
        socket.on("room-error", (data) => {
          alert(data.message);
        });
      }
      createRoom();

      const gameTimeInterval = setInterval(() =>{ 
        const getGameTime = () => {
          socket.emit("get-game-time");
          socket.once("result", (data) => {
            setTime(data.time)
          })
        }
        getGameTime();
      }, 1000)
      time === '00:00:00' && clearInterval(gameTimeInterval);
    });
  }


  return (
    <div className="w-full flex-grow flex flex-col bg-[#E8E8E8] py-6">
      <h2 className='w-[18ch] mx-auto text-center text-3xl font-bold'>The game will start in {time ? time : "00:00"}</h2>
        <div className="w-full flex flex-col mt-4 items-center"> 
          <h3 className="text-2xl font-bold">Rules</h3> 
          <div className="flex-grow w-full flex flex-col"> 
            <ul className='flex flex-col mx-auto list-decimal' >
                <li>Each question have have 40 seconds time..</li>
                <li>Click on the answer. Choices are disabled after one click</li>
                <li>Five Questions</li>
            </ul>
          </div> 
        </div> 
    </div>
  )
}

export default Lobby