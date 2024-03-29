import React , {useState, useEffect}from 'react';
import {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitTextDiv,
    DisplayTimeUnitContainerDiv,
    DisplayDigitsControllerContainer,
    SwitchContainer,
    MemContainer,
    IncDecControlButton,
    TimerControlContainerDiv,
    StartStopButton,
    ResetButton,
    MemButton,
    RecallButton,

} from '../styled/timer_display_style';

import { Slider, Switch } from 'antd';

const TimerDisplay = (props) => {

    const colonText = ':';
    let showRecall;
    

    if (props.storeActive) {
        showRecall = (<RecallButton onClick = {props.recallTimerValue}> Recall </RecallButton>);
    } else {
        showRecall = null;
    }

    return (
        <DisplayContainerDiv>
            <DisplayDigitContainerDiv>
                    <SwitchContainer>
                        <Switch 
                            checkedChildren = "Dec"
                            unCheckedChildren = "Inc"
                            style = {{ background: props.incTrue ? 'seagreen' : 'deeppink'}}
                            onChange = {props.timerDirection} 
                            // min = {0}
                            // max = {1}
                            // vertical
                            // tipFormatter = {null}
                            // marks = {{0: 'inc', 1: 'dec'}}
                        />
                    </SwitchContainer>
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

                <MemContainer>
                    <MemButton onClick = {props.storeTimerValue}> Store </MemButton>
                    {showRecall}
                </MemContainer>


            </DisplayDigitContainerDiv>
        
        <TimerControlContainerDiv>
            <StartStopButton 
                onClick = {props.toggleTimer_handler}
                timerActive = {props.timerActive}
                //style = {{color, background, border}}    
            > {props.timerStartStop} </StartStopButton>
            <ResetButton 
                onClick = {props.resetTimer_handler}
                timerActive = {props.timerActive}
            > Reset </ResetButton>
        </TimerControlContainerDiv>



        </DisplayContainerDiv>

    )


}


export default TimerDisplay;
