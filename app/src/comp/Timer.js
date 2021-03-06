import React, {useState, useEffect} from 'react';
import TimerDisplay from './TimerDisplay';


const Timer = (props) => {

    const currentDate = new Date().toDateString();
    

    // Hooks use arra\y destructuring fro delcaring state variables
    // initial state DOES NOT have to be an obj as does this.state in Class components
    //      DO NOT call Hooks from inside functions, conditions,
    //      
    const [secondsDateCount, setSecondsDateCount] = useState();
    const [secondsCount, setSecondsCount] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [timerStartStop, setTimerStartStop] = useState('Start');

    // const [timerDirection, setTimerDirection] = useState('up');
    // const [ timeCount, setTimeCount] = useState(new Date());

    // const countTime = (dir) => {
    //     if (dir) {
    //         setTimerDirection('up')
    //     }
    
    
    // }


    const toggleTimer = () => {
        setTimerActive(!timerActive);
    
    }

    const resetTimer = () => {
        setTimerActive(false);
        setSecondsCount(0);

        console.log("Reset FIRED")
    }

    // const getSecondsCount = () => {
    //     return secondsCount;
    
    // }


    // useEffect
    // similar to mix of componentDidMount + componentDidUpdate + componentWillUnmount
    //    Runs AFTER first render and AFTER every update.
    //    Previous effects are replaced after every re-render
    //    useful for managing 'side-effects' (e.g. timers, counters, network requests, subscriptions, ...)
    //    DO NOT require Cleanup: network requests, manual DOM changes, data logging
    //    exploites JavaScript closures to manage state within the function scope
    
    // toggle button control text for Start / Stop
    //      the added [timerActive] array is similar to using prevProps & prevState in componentDidUpdate
    //         in order to skip running useEffect when not needed and to improve performance
    

    //      THIS useEffect Hook is REFACTORED into below Hook
    // useEffect(() => {
    //     timerActive ? setTimerStartStop('Stop') : setTimerStartStop('Start')
    
    // }, [timerActive])


    // similar to mix of componentDidMount + componentDidUpdate + componentWillUnmount
    useEffect( () => {
        if(timerActive) {
            const timer = setInterval(
                () => {setSecondsCount(secondsCount + 1)}
            , 100)

            setTimerStartStop('Stop');   
            // cancels operation of timer, this allows single increment else this starts count up from 0
            return () => clearInterval(timer);
              
        }

        setTimerStartStop('Start')

    
    //}, [])     // this is original Hook
    }, [timerActive, secondsCount]);   // refactored


    useEffect( () => {
        const dateTimer = setInterval( () => {setSecondsDateCount(new Date().toLocaleTimeString())}, 1000)
        
        return () => clearInterval(dateTimer)
    })    



    return (


        <div>
            <TimerDisplay 
                // min_tens = "5"
                // min_ones = "8"
                // colon = ":"
                // sec_tens = "4"
                // sec_ones = "7"
                secondsCount = {secondsCount}    
            
            
            />
            <p> Direct call to date is:  {currentDate} </p>
            <p> Date with seconds count : {secondsDateCount} </p>
            <div>
                <button onClick = {toggleTimer}> {timerStartStop} </button>
                <button onClick = {resetTimer}> Reset </button>
            
            </div>
            <h2> Seconds Count : {secondsCount}</h2>

            
        </div>
    
    
    )



}

export default Timer;