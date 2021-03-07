import React, {useState, useEffect} from 'react';
import TimerDisplay from './TimerDisplay';


var dayjs = require('dayjs');

// var startOfDay = require('date-fns/startOfDay')
// var add = require('date-fns/add');
// var sub = require('date-fns/sub');

const Timer = (props) => {

    const currentDate = new Date().toDateString();
    

    // Hooks use arra\y destructuring fro delcaring state variables
    // initial state DOES NOT have to be an obj as does this.state in Class components
    //      DO NOT call Hooks from inside functions, conditions,
    //      
    const [secondsDateCount, setSecondsDateCount] = useState();
    const [secondsCount, setSecondsCount] = useState(0);
    
    const [timeVal, setTimeVal] = useState(dayjs().startOf('day'));
    
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
        // setSecondsCount(0);
        setTimeVal((dayjs().startOf('day')));

        console.log("Reset FIRED")
    }

    // const getSecondsCount = () => {
    //     return secondsCount;
    
    // }


    const incMin = () => {
        setTimeVal(timeVal.add(1, 'm'));
    }

    const decMin = () => {
        setTimeVal(timeVal.subtract(1, 'm'));
    }

    const incSec = () => {
        setTimeVal(timeVal.add(1, 's'));
    }

    const decSec = () => {
        setTimeVal(timeVal.subtract(1, 's'));
    }

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
    useEffect(() => {
        timerActive ? setTimerStartStop('Stop') : setTimerStartStop('Start')
    
    }, [timerActive])


    // // similar to mix of componentDidMount + componentDidUpdate + componentWillUnmount
    useEffect( () => {
        if(timerActive) {
            const timer = setInterval(
                // () => {setSecondsCount(secondsCount + 1)}
                // () => {setTimeVal(startOfDay(new Date()))}
                () => setTimeVal(timeVal.add(1, 's'))
            , 100)

            setTimerStartStop('Stop');   
            // cancels operation of timer, this allows single increment else this starts count up from 0
            return () => clearInterval(timer);
              
        }

        setTimerStartStop('Start')

    
    //}, [])     // this is original Hook
    }, [timerActive, timeVal]);   // refactored


    useEffect( () => {
        const dateTimer = setInterval( () => {setSecondsDateCount(new Date().toLocaleTimeString())}, 1000)
        
        return () => clearInterval(dateTimer)
    })    

    

    return (


        <div>
            <TimerDisplay 
                min_tens = {timeVal.format('mm').slice(-2,1)}
                min_ones = {timeVal.format('mm').slice(-1)}
                colon = ":"
                sec_tens = {timeVal.format('ss').slice(-2,1)}
                sec_ones = {timeVal.format('ss').slice(-1)}
                // secondsCount = {secondsCount}    
            
                timerActive = {timerActive}
                timerStartStop = {timerStartStop}

                toggleTimer_handler = {toggleTimer}
                resetTimer_handler = {resetTimer}

                incMin_handler = {incMin}
                decMin_handler = {decMin}
                incSec_handler = {incSec}
                decSec_handler = {decSec}

            />

            <p style = {{border: '1px solid red', width: '500px'}}> timeVal is <span style = {{width: '350px'}}>  {timeVal.toString()} </span> </p>
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