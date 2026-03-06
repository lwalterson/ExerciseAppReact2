import { useState, useCallback, useEffect } from "react"
import Counted from './index.jsx';

function Rlist() {
const [jumping, setJumping] = useState(false);
const [sits, setSits] = useState(false);

    if(jumping) {
      return (
      <div><Counted countExercise={"Jumping Jacks"}/> 
      </div>)
    }
    if(sits) {
      return (
      <div><Counted countExercise={"Sit Ups"}/> 
       </div>)
    }

  return (
    <div className="App">
        <h1>Select an Exercise</h1>
        <button onClick={() => setJumping(true)}>
          Jumping Jacks
        </button>
        <button onClick={() => setSits(true)}>
          Sit Ups
        </button>
{/* <Counted countExercise={"count"}></Counted> */}
    </div>
  );
}

export default Rlist;