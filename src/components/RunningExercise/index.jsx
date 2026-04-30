import { useState, useCallback, useEffect } from "react"
export default function Run({timeExercise}){
    let [texercise, setTExercise] = useState(timeExercise)
    let [timer, setTimer]= useState(0);
    let [currentTime, setCurrentTime]= useState(Date.now());
    let [time, setTime]= useState(0);
    let [run, setRun]= useState(false);
    let [laps, setLaps]= useState([])
    
    useEffect(()=> {
        if (run) {
            let newTimer= setInterval(()=>{
                setCurrentTime(prev=>prev+1)}, 1000/30)
            setTimer(newTimer)
            return()=> clearInterval(newTimer)
        }
    }, [run])

    let click= useCallback( 
()=>{
    if(run){
        setTime(Date.now() - currentTime)
        clearInterval(timer)
        setRun(false)
    }
    else{
        setRun(true)
        clearInterval(timer)
        setCurrentTime(Date.now())
        
        // let timer= setInterval(()=>setCurrentTime(prev=>prev+1), 1000/30)
        // setTimer(timer)
    }
}, [run, timer]
    )
   return(
    <div className="App">
    <h2>{texercise}</h2>
    <p>{run ? (Date.now()-currentTime)/1000 : time/1000} </p>
    <ul >
       {laps.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
      </ul>
    <button onClick={click}>{run ? "Stop" : "Start"}</button>
    <button onClick={()=> setLaps(laps => [...laps, time/1000])}>Lap</button>
    </div>
   )
}