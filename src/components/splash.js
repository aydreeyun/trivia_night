import React from 'react';

const Splash = ({ handleStart }) => {
  return (
    <div className="splash">
      <div className="splash-main">
        <h1 className="splash-header">Welcome to Trivia Night!</h1>
        <div className="splash-rules">
          <ul>Rules:
            <li>There are 10 questions, try to get as many points as you can</li>
            <li>There are 4 choices and only ONE is correct</li>
            <li>Each correct question will award you 10 points</li>
            <li>There is no time limit, take as much time as you need</li>
            <li>Refreshing the page will reset the round</li>
            <li>HAVE FUN!!</li>
          </ul>
        </div>
        <button className="splash-button"
          onClick={handleStart}>
          START
        </button>
      </div>
      <div className="splash-footer">
        <p>Adrian Kim © 2020</p>
        <a href="https://www.linkedin.com/in/adriantaehyunkim/" target="_blank">LinkedIn</a>
        <a href="https://aydreeyun.github.io/" target="_blank">Portfolio</a>
        <a href="https://github.com/aydreeyun" target="_blank">GitHub</a>
      </div>
    </div>
  );
};

export default Splash;