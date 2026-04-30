import './App.css';
import { useState, useCallback, useEffect } from "react"
import Ulist from './components/RunningExercise/list.jsx';
import Dlist from './components/DurationExercise/list.jsx';
import Rlist from './components/RepetitionExercise/list.jsx';

function App() {
const [run, setRunning] = useState(false);
const [duration, setDuration] = useState(false);
const [repetition, setRepetition] = useState(false);

 if(run) {
      return (
      <div className="App"><Ulist /> 
      <button onClick={() => setRunning(false)}> Back
        </button> </div>)
    }
 if(duration) {
      return (
      <div className="App"><Dlist /> 
      <button onClick={() => setDuration(false)}> Back
        </button> </div>)
    }
    if(repetition) {
      return (
      <div className="App"><Rlist /> 
      <button onClick={() => setRepetition(false)}> Back
        </button> </div>)
    }

  return (
    <div className="App">
        <h1>Select an Exercise Type</h1>
        <button onClick={() => setRunning(true)}>
          Running
        </button>
        <button onClick={() => setDuration(true)}>
          Duration
        </button>
        <button onClick={() => setRepetition(true)}>
          Repetition
        </button>
{/* <Counted countExercise={"count"}></Counted> */}
    </div>
  );
}

export default App;
