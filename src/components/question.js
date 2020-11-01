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
    const questionAnswers = Array.from(document.querySelectorAll(".question-answer"));

    for (let i = 0; i < questionAnswers.length; i++) {
      const answer = questionAnswers[i];

      answer.classList.add('gray');

      if (answer.value === correct) answer.classList.add('green');
      if (userAnswer === answer.value && userAnswer !== correct) answer.classList.add('red');
    }
  }

  const resetButtons = () => {
    const questionAnswers = Array.from(document.querySelectorAll(".question-answer"));

    for (let i = 0; i < questionAnswers.length; i++) {
      const answer = questionAnswers[i];

      answer.classList.remove('green');
      answer.classList.remove('red');
      answer.classList.remove('gray');
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

  // Answer choices
  const renderAnswers = () => (
    answers.map((el, i) => (
      <button 
        className="question-answer"
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
      <div className="question">
        <div className="question-header">
          <div className="question-num">QUESTION {questionNum + 1} / 10</div>
          <div className="question-score">SCORE: {score}</div>
        </div>
        <div className="question-mid">
          <div className="question-main">{question}</div>
          <div className="question-next">
            {userAnswer ? <button className="question-next-button" onClick={e => handleNextQuestion(e)}>{'>>'}</button> : null}
          </div>
        </div>
        <div className="question-answer-main">
          {renderAnswers()}
        </div>
        
      </div>
    )
  } else {
    return (
      <div className="trivia-end">
        <div className="trivia-end-main">
          <div className="trivia-end-score">Your final score: {score}</div>
          <button className="trivia-end-button"
            onClick={e => handlePlayAgain(e)}>
              PLAY AGAIN
          </button>
        </div>
        <div className="trivia-end-footer">
          <p>Adrian Kim © 2020</p>
          <a href="https://www.linkedin.com/in/adriantaehyunkim/" target="_blank">LinkedIn</a>
          <a href="https://aydreeyun.github.io/" target="_blank">Portfolio</a>
          <a href="https://github.com/aydreeyun" target="_blank">GitHub</a>
        </div>
      </div>
    )
  }
};

export default Question;