
import { useState, useCallback, useEffect } from "react"
export default function Timed({timeExercise}){
    let [texercise, setTExercise] = useState(timeExercise)
    let [timer, setTimer]= useState(0);
    let [startTime, setStartTime]= useState(Date.now());
    // let [endTime, setEndTime]= useState (0)
    // let [displayTime, setDisplayTime]= useState(0)
    let [time, setTime]= useState(0);
    let [run, setRun]= useState(false);

    useEffect(()=> {
        if (run) {
            let newTimer= setInterval(()=>{
            setStartTime(prev=>prev+time)}, 1000/30)
            setTimer(newTimer)
            return()=> clearInterval(newTimer)
        }
    }, [run])

    let click= useCallback( 
()=>{
    if(run){
        setTime(Date.now() - startTime)
        clearInterval(timer)
        setRun(false)
    }
    else{
        setRun(true)
        setTime(Date.now() - time)
        clearInterval(timer)
        setStartTime(Date.now())
        
    }
}, [run, timer]
    )
   return(
    <div>
    <h1>{texercise}</h1>
    <p>{run ? time/1000 : time/1000} </p>
    <button onClick={click}>{run ? "Stop" : "Start"}</button>
    <button onClick={()=> setTime(0)}>Reset</button>
    </div>
   )
}