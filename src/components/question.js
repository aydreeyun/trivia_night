import React, { useState, useEffect } from 'react';
import data from '../data/Apprentice_TandemFor400_Data.json';

const Question = () => {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correct, setCorrect] = useState("");
  const [userAnswer, setUserAnswer] = useState(null);
  const [questionNum, setQuestionNum] = useState(0);

  const shuffle = arr => {
    for (let i = 0; i < arr.length; i++) {
      const randIdx = Math.floor(Math.random() * arr.length);
      [arr[i], arr[randIdx]] = [arr[randIdx], arr[i]];
    }
  }

  const handleAnswer = e => {
    e.preventDefault();
    setUserAnswer(e.target.value)

    const newScore = score + 50;

    if (userAnswer === correct) setScore(newScore);
  }

  const handleNextQuestion = e => {
    e.preventDefault();
    
    setUserAnswer(null);
    setQuestionNum(questionNum + 1);
  }

  const handlePlayAgain = e => {
    e.preventDefault();

    shuffle(data);

    setQuestionNum(0);
  }



  useEffect(() => {
    setQuestion(data[questionNum].question);
    let choices = [...data[questionNum].incorrect, data[questionNum].correct];
    shuffle(choices);

    setAnswers(choices);
    setCorrect(data[questionNum].correct);
  }, [questionNum])


  if (questionNum < 10) {
    return (
      <div>
        <h1>SCORE: {score}</h1>
        <p>{question}</p>
        {userAnswer && userAnswer === correct ? <h1>CORRECT</h1> : null}
        {answers.map((el, i) => (
          <button 
            onClick={e => handleAnswer(e)}
            key={i}
            value={el}
          >
              {el}
          </button>
        ))}
        {userAnswer ? <button onClick={e => handleNextQuestion(e)}>Next Question</button> : null}
      </div>
    )
  } else {
    return (
      <div>
        <h1>DONE</h1>
        <div>{score}</div>
        <button onClick={e => handlePlayAgain(e)}>Play Again</button>
      </div>
    )
  }
};

export default Question;