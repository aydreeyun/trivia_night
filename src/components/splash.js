import React from 'react';

const Splash = ({ handleStart }) => {
  return (
    <div>
      <h1>Welcome to Trivia!</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Splash;