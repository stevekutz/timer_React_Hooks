import React , {useState, useEffect}from 'react';
import {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitTextDiv,
    DisplayTimeUnitContainerDiv,
    DisplayDigitsControllerContainer,
    IncDecControlButton,
    TimerControlContainerDiv,
    StartStopButton,
    ResetButton

} from '../styled/timer_display_style';


const TimerDisplay = (props) => {

    const colonText = ':';

    const [min_Ones, setMin_Ones] = useState('0');
    const [min_Tens, setMin_Tens] = useState('0');
    const [sec_Ones, setSec_Ones] = useState('0');
    const [sec_Tens, setSec_Tens] = useState('0');

    const [justSeconds, setJustSeconds] = useState('0');
    const [minCount, setMinCount] = useState(0);


    const [secDigits, setSecDigits] = useState('00');
    const [minDigits, setMinDigits] = useState('00');
    const [color, setColor] = useState('red');
    const [background, setBackground] = useState('#B30000');
    const [border, setBorder] = useState('2px solid paelvioletred');

    useEffect( () => {
        color: {props.timerActive ? setColor('red') : setColor('blue')};
        background: {props.timerActive ? setBackground('pink') : setBackground('#C7FFEE')};
        border: {props.timerActive ? setBorder('2px solid palevioletred') : setBorder('2px solid seagreen')};


    }, [props.timerActive]);


    return (
        <DisplayContainerDiv>
            <DisplayDigitContainerDiv>

                <DisplayDigitsControllerContainer>
                    <IncDecControlButton onClick = {props.incMin_handler}> + </IncDecControlButton>
                    <DisplayTimeUnitContainerDiv>
                        <DisplayDigitTextDiv> {props.min_tens} </DisplayDigitTextDiv>
                        <DisplayDigitTextDiv> {props.min_ones} </DisplayDigitTextDiv>
                    </DisplayTimeUnitContainerDiv>
                    <IncDecControlButton onClick = {props.decMin_handler}> - </IncDecControlButton>
                </DisplayDigitsControllerContainer>    
                
                <DisplayColonDiv> {colonText} </DisplayColonDiv>

                <DisplayDigitsControllerContainer>

                    <IncDecControlButton onClick = {props.incSec_handler}> + </IncDecControlButton>
                    <DisplayTimeUnitContainerDiv>
                        <DisplayDigitTextDiv> {props.sec_tens} </DisplayDigitTextDiv>
                        <DisplayDigitTextDiv> {props.sec_ones} </DisplayDigitTextDiv>
                    </DisplayTimeUnitContainerDiv>
                    <IncDecControlButton onClick = {props.decSec_handler}> - </IncDecControlButton>
                                
                </DisplayDigitsControllerContainer>

            </DisplayDigitContainerDiv>
        
        <TimerControlContainerDiv>
            <div> {props.timerActive.toString()}</div>
            <StartStopButton 
                onClick = {props.toggleTimer_handler}
                style = {{color, background, border}}    
            > {props.timerStartStop} </StartStopButton>
            <ResetButton onClick = {props.resetTimer_handler}> Reset </ResetButton>
        </TimerControlContainerDiv>



        </DisplayContainerDiv>

    )


}


export default TimerDisplay;
/*
    <DisplayDigitText> {min_Tens} </DisplayDigitText>
    <DisplayDigitText> {min_Ones} </DisplayDigitText>
    <DisplayColonDiv> {colonText} </DisplayColonDiv>
    <DisplayDigitText> {sec_Tens} </DisplayDigitText>
    <DisplayDigitText> {sec_Ones} </DisplayDigitText>
*/    


/*
    <DisplayDigitText> {minDigits} </DisplayDigitText>
    <DisplayColonDiv> {colonText} </DisplayColonDiv>
    <DisplayDigitText> {secDigits} </DisplayDigitText>
*/