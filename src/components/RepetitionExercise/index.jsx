import { useState, useCallback, useEffect } from "react"
export default function Counted({countExercise}){
let [cexercise, setCExercise] = useState(countExercise)
let [count, setCount] = useState(0)

return(
    <div className="App">
    <h2>{cexercise}</h2>
    <p>{count}</p>
    <label>Rep Number</label><br />
    <input type="number" onChange={(event)=> {setCount(Number(event.target.value))}}/> <br />
    <button onClick={() => setCount(prev=>prev+1)}>Up</button>
    <button onClick={() => setCount(prev=>prev-1)}>Down</button><br />
    <button onClick={() => setCount(0)}>Reset</button>
   </div>)
}
