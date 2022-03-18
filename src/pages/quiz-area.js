import React, { useEffect, useState } from 'react';
import { CorrectAnswer, MiniLeaderboard, QuestionCard, WrongAnswer } from '../components/correct-answer';
import QuizFunctions from '../functions/quiz-function';
import { server } from '../fake-server/server';
import { useNavigate } from 'react-router-dom';

const QuizArea = () => {
  const { verifyAnswer } = QuizFunctions();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [quizCard, setQuizCard] = useState(false);
  const [results, setResults] = useState('');
  const [counter, setCounter] = useState(15)
  const [round, setRound] = useState(1);
  const [next, setNext] = useState(false);
  const [popup, setPopup] = useState(true);

  useEffect(() => {
    setQuizCard(!quizCard);
    setAnswer('');
    setPopup(!popup)
    const interval = setInterval(() => { setCounter(prev => prev >= 0 ? prev - 1: 0) }, 1000); 
    if(round > server.length){
      navigate('/results')
    }
    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, [next])

  const timer = () => {
    verifyAnswer(answer, (option) => {
        setQuizCard(!quizCard);
        setRound(prev => prev + 1)
        setResults(option);
        setCounter(20)

        setTimeout(() => {
          setNext(!next);
        }, 5000)
      }
    )
  }
  if( counter === 0 ) timer();

  
  return (
    <div id='main-quiz' className='flex-grow flex flex-col gap-4 py-4 w-full mx-auto'>
      <div className={`${quizCard ? 'grid-cols-3 ': 'grid-cols-2'} grid lg:grid-cols-2 w-full lg:place-items-center`}>
        <span className='flex flex-col text-white lg:text-black items-center'>
          <p>Score</p>
          <h2 className='text-3xl font-bold '>15000</h2>
        </span>
        <span className={`${quizCard ? 'flex': 'hidden'} flex-col items-center lg:hidden top-24`}>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-blue-500'>
            <p className='text-2xl font-bold text-white'>00:{counter > 9 ? counter : '0'+ counter}</p>
          </div>
        </span>
        <span className='flex flex-col items-center text-white lg:text-black lg:justify-self-center'>
          <p>Prize Money</p>
          <h2 className='text-3xl font-bold'>$1000</h2>
        </span>
      </div>

      {
        server.map((question, index) => 
          <div key={question.id} className={`${quizCard ? 'flex': 'hidden'} ${round === index + 1 ? 'flex' : 'hidden'} relative w-[90%] lg:w-[50%] bg-white p-4 lg:pt-10 mb-8 gap-2 rounded-2xl flex-col items-center mx-auto`}>
              <QuestionCard 
                    counter={counter} 
                    setAnswer={(e) => {
                      setAnswer(e.target.value)
                      setPopup(!popup)
                    }}
                    quiz={question.question}
                    options={question.options}
                    round={index + 1}
                    pop = {popup}/>
          </div>)
      }
      {/* RESULTS */}
      {
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
      }
    </div>
  )
}

export default QuizArea