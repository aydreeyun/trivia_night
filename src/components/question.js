import React, { useState, useEffect } from 'react';
import data from '../data/Apprentice_TandemFor400_Data.json';
import { shuffle } from '../util/shuffle';

const Question = () => {
  // React local state w/ hooks
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correct, setCorrect] = useState("");
  const [userAnswer, setUserAnswer] = useState(null);
  const [questionNum, setQuestionNum] = useState(0);

  // On component did mount, shuffle the array of questions
  useEffect(() => shuffle(data), []);
  
  const handleAnswer = e => {
    e.preventDefault();
    setUserAnswer(e.target.value);
  }

  const handleNextQuestion = e => {
    e.preventDefault();
    
    setUserAnswer(null);
    resetButtons();
    setQuestionNum(questionNum + 1);
  }

  const handlePlayAgain = e => {
    e.preventDefault();

    shuffle(data);

    setQuestionNum(0);
    setScore(0);
  }

  const findCorrectAnswer = () => {
    const choices = Array.from(document.querySelectorAll(".choice"));

    for (let i = 0; i < choices.length; i++) {
      const choice = choices[i];

      if (choice.value === correct) choice.classList.add('green');
      if (userAnswer === choice.value && userAnswer !== correct) choice.classList.add('red');
    }
  }

  const resetButtons = () => {
    const choices = Array.from(document.querySelectorAll(".choice"));

    for (let i = 0; i < choices.length; i++) {
      const choice = choices[i];

      choice.classList.remove('green');
      choice.classList.remove('red');
    }
  }

  // On update of the question number - update the question, answers, and correct answer
  useEffect(() => {
    setQuestion(data[questionNum].question);

    // set answer choices to array of both incorrect and correct
    const choices = [...data[questionNum].incorrect, data[questionNum].correct];
    // shuffle the answer choices to prevent muscle memory answering
    shuffle(choices);

    setAnswers(choices);
    setCorrect(data[questionNum].correct);
  }, [questionNum]);

  // On update of the user answer - check if answer matches correct answer and increment score
  useEffect(() => {
    // sets correct answer to green and wrong answer to red
    if (userAnswer) findCorrectAnswer();
    if (userAnswer === correct) setScore(score + 10);
  }, [userAnswer]);

  const renderAnswers = () => (
    answers.map((el, i) => (
      <button 
        className="choice"
        onClick={e => handleAnswer(e)}
        key={i}
        value={el}
        disabled={userAnswer ? true : false}
      >
        {el}
      </button>
    ))
  );


  if (questionNum < 10) {
    return (
      <div>
        <h1>QUESTION {questionNum + 1} / 10</h1>
        <h1>SCORE: {score}</h1>
        <p>{question}</p>
        {userAnswer === correct ? <h1>CORRECT</h1> : null}
        {renderAnswers()}
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