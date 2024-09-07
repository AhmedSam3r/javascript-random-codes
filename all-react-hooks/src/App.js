import './App.css';
import React from 'react';
import { StateTutorial } from './useState/StateTutorial';
import {ReducerTutorial} from './useReducer/ReducerTutorial'

function App() {
  return (
    <div className="App">
      <StateTutorial/>
      <ReducerTutorial/>
    </div>
  );
}

export default App;
