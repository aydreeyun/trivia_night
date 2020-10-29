import React, { useState } from 'react';
import Splash from './splash';
import Question from './question';
import data from '../data/Apprentice_TandemFor400_Data.json';

const App = () => {
  const [started, setStarted] = useState(false);
  const handleStart = () => setStarted(true);

  return started ? <Question /> : <Splash handleStart={handleStart} />;
};

export default App;