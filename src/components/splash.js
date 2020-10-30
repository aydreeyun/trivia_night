import React from 'react';

const Splash = ({ handleStart }) => {
  return (
    <div className="splash">
      <h1 className="splash-header">Welcome to Trivia!</h1>
      <div className="splash-rules">
        <ul>Rules:
          <li>There are 10 questions, try to get as many correct as you can</li>
          <li>There are 4 choices and only ONE is correct</li>
          <li>Each correct question will award you 10 points, the max being 100</li>
          <li>There is no time limit, take as much time as you need</li>
          <li>Refreshing the page will reset the round</li>
          <li>HAVE FUN!!</li>
        </ul>
      </div>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Splash;