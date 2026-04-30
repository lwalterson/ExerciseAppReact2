
import { useState, useCallback, useEffect } from "react"
import Run from './index.jsx';

function Ulist() {
const [running, setRunning] = useState(false);

 if(running) {
      return (
      <div><Run timeExercise={"Running"}/> 
      </div>)
    }

  return (
    <div className="App">
        <h1>Select an Exercise</h1>
        <button onClick={() => setRunning(true)}>
          Running
        </button>
{/* <Counted countExercise={"count"}></Counted> */}
    </div>
  );
}

export default Ulist;