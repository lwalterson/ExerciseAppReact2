import { useState, useCallback, useEffect } from "react"
import Timed from './index.jsx';

function Dlist() {

const [cycling, setCycling] = useState(false);

    if(cycling) {
      return (
      <div><Timed timeExercise={"Cycling"}/> 
       </div>)
    }

  return (
    <div className="App">
        <h1>Select an Exercise</h1>
        <button onClick={() => setCycling(true)}>
          Cycling
        </button>
{/* <Counted countExercise={"count"}></Counted> */}
    </div>
  );
}

export default Dlist;