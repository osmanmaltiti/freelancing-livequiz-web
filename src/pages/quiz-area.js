import React, { useEffect, useState } from 'react';
import { CorrectAnswer, MiniLeaderboard, QuestionCard, WrongAnswer } from '../components/correct-answer';
import QuizFunctions from '../functions/quiz-function';
import { server } from '../fake-server/server';
import { useNavigate } from 'react-router-dom';
import Results from '../API/GET-results';
import { useSelector } from 'react-redux';

const QuizArea = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [quizCard, setQuizCard] = useState(false);
  const [round, setRound] = useState(1);
  const [next, setNext] = useState(false);
  const [question, setQuestions] = useState([]);
  const [popup, setPopup] = useState(true);
  const { getCurrentResults } = Results();
  const comp = useSelector(state => state.competition.currentCompetition);
  const socket = useSelector(state => state.socket.socket);

  useEffect(() => {
      socket.emit("current-question-number", round);
      socket.emit("new-quest", round);
      setRound(prev => prev + 1);
  }, [])

  if(typeof socket !== 'undefined'){
    socket.on("questions", ({ questions, time }) => {
      console.log(questions)
      setQuestions(questions)
    })
  }
  
  return (
    <div id='main-quiz' className='flex-grow flex flex-col gap-4 py-4 w-full mx-auto'>
      <div className={`${quizCard ? 'grid-cols-3 ': 'grid-cols-2'} grid lg:grid-cols-2 w-full lg:place-items-center`}>
        <span className='flex flex-col text-white lg:text-black items-center'>
          <p>Score</p>
          <h2 className='text-3xl font-bold '>0</h2>
        </span>
        <span className={`${quizCard ? 'flex': 'hidden'} flex-col items-center lg:hidden top-24`}>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-blue-500'>
            {/* <p className='text-2xl font-bold text-white'>00:{counter > 9 ? counter : '0'+ counter}</p> */}
          </div>
        </span>
        <span className='flex flex-col items-center text-white lg:text-black lg:justify-self-center'>
          <p>Prize Money</p>
          <h2 className='text-3xl font-bold'>${comp.price}</h2>
        </span>
      </div>

      {
        question.map((item, index) => 
          <div key={item.id} className={`${quizCard ? 'flex': 'flex'} ${round === index + 1 ? 'flex' : 'flex'} relative w-[90%] lg:w-[50%] bg-white p-4 lg:pt-10 mb-8 gap-2 rounded-2xl flex-col items-center mx-auto`}>
              <QuestionCard 
                    // counter={counter} 
                    setAnswer={(e) => {
                      setAnswer(e.target.value)
                      setPopup(!popup)
                    }}
                    quiz={item.text}
                    options={item.choices}
                    round={index + 1}
                    pop = {popup}/>
          </div>)
      }
      {/* RESULTS */}
      {/* {
        results === 'correct' ? 
          <span className={`${quizCard ? 'hidden': 'flex flex-col' }`}>
            <CorrectAnswer/>
            <MiniLeaderboard/>
          </span>  : 
        results === 'wrong' ? 
          <span className={`${quizCard ? 'hidden': 'flex flex-col' }`}>  
            <WrongAnswer/>
            <MiniLeaderboard/> 
          </span>
          
        : null
      } */}
    </div>
  )
}

export default QuizArea