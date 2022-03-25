import React, { useEffect, useState } from 'react';
import { CorrectAnswer, MiniLeaderboard, QuestionCard, WrongAnswer } from '../components/correct-answer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const QuizArea = () => {
  const navigate = useNavigate();
  const [answers, setAnswer] = useState({});
  const [quizCard, setQuizCard] = useState(false);
  const [round, setRound] = useState(1);
  const [timer, setTimer] = useState(15);
  const [results, setResults] = useState(null);
  const [score, setScore] = useState('');
  const [check, setCheck] = useState(false);
  const [wait, setWait] = useState(5);
  const [next, setNext] = useState(false);
  const [question, setQuestions] = useState([]);
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState();
  const [gameLength, setgameLength] = useState(2);
  const comp = useSelector(state => state.competition.currentCompetition);
  const socket = useSelector(state => state.socket.socket);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('currentUser')));
    setQuizCard(!quizCard);
    setAnswer('');
    setPopup(!popup);
    setResults(null);
    socket.emit("game-length");
    socket.emit("new-question", round);
    const counter = setInterval(() => { setTimer(prev => prev > 0 ? prev - 1: 0) }, 1000);
    setTimeout(() => setCheck(!check), 15000)
    return () => clearInterval(counter)
  }, [next]);

  socket.once("questions", ({ questions }) => {
    setQuestions(questions)
  })

  socket.once("game-length", (data) => setgameLength(data))

  useEffect(() => {
    const verify = () => {
      socket.emit('submit-answer', {answers});
      socket.once('question-result', ({answer, score}) => {
        setRound(prev => prev + 1);
        setQuizCard(!quizCard);
        setResults(answer);
        setScore(score);
        setTimer(20);
        setWait(5)
        setTimeout(() => setNext(!next), 5000);
      });
    }
    if(timer == 0) verify();
    
  }, [check])

  return (
    <div id='main-quiz' className='flex-grow flex flex-col gap-4 py-4 w-full mx-auto'>
      <div className={`${quizCard ? 'grid-cols-3 ': 'grid-cols-2'} grid lg:grid-cols-2 w-full lg:place-items-center`}>
        <span className='flex flex-col text-white lg:text-black items-center'>
          <p>Score</p>
          <h2 className='text-3xl font-bold '>{score}</h2>
        </span>
        <span className={`${quizCard ? 'flex': 'hidden'} flex-col items-center lg:hidden top-24`}>
          <div className='grid place-items-center h-[5rem] aspect-square rounded-full bg-blue-500'>
            <p className='text-2xl font-bold text-white'>00:{timer > 9 ? timer : '0'+ timer}</p>
          </div>
        </span>
        <span className='flex flex-col items-center text-white lg:text-black lg:justify-self-center'>
          <p>Prize Money</p>
          <h2 className='text-3xl font-bold'>${comp.price}</h2>
        </span>
      </div>

      {
        question.map((item, index) => 
          <div key={item.id} className={`${quizCard ? 'flex': 'hidden'} relative w-[90%] lg:w-[50%] bg-white p-4 lg:pt-10 mb-8 gap-2 rounded-2xl flex-col items-center mx-auto`}>
              <QuestionCard 
                    counter={timer} 
                    setAnswer={(e) => {
                      setAnswer({qid: item.id, answer: e.target.value, user: user.first_name});
                      setPopup(true)
                    }}
                    quiz={item.text}
                    options={item.choices}
                    round={round}
                    pop = {popup}/>
          </div>)
      }
      {/* RESULTS */}
      {
        results === 'correct' ? 
          <span className={`${quizCard ? 'hidden': 'flex flex-col' }`}>
            <CorrectAnswer timer = {wait} round = {round - 1}/>
            <MiniLeaderboard/>
          </span>  : 
        results === 'wrong' ? 
          <span className={`${quizCard ? 'hidden': 'flex flex-col' }`}>  
            <WrongAnswer timer = {wait} round = {round - 1}/>
            <MiniLeaderboard/> 
          </span>
          
        : null
      }
    </div>
  )
}

export default QuizArea