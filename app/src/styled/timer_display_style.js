import styled, {css} from 'styled-components';

const DisplayContainerDiv = styled.div`
    
    border: 3px solid deeppink;
    width: 350px;
    color: red;
    padding:
    display: flex;
    margin: 0 auto;



`;

const DisplayDigitContainerDiv = styled.div`
    border: 5px solid purple;
    
    // width: 170px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px;
    margin: 10px auto;


`

const DisplayColonDiv = styled.div`
    border: 1px solid seagreen; 

    width: 5px;
`

const DisplayDigitsControllerContainer = styled.div`
    border: 1px solid orange;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 54px;
    height: 90px;

`
const SwitchContainer = styled(DisplayDigitsControllerContainer)`
    // background = 'white'

    border: 1px solid yellow;
    width: 270px;
`

const MemContainer = styled(SwitchContainer)`
    border: 1px solid green;



`

const DisplayTimeUnitContainerDiv = styled.div`
    border: 2px solid green;

    width: 50px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const DisplayDigitTextDiv = styled.div`
    border: 1px solid yellow;
    
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 25px;
    color: lightgray;

    color: magenta;
    font-family: DigitalDismay;
    font-size: 24px;

    
`
const IncDecControlButton = styled.button`
    border: 2px solid magenta;

    width: 30px;
    height: 20px;
    margin: 5px;

    border-radius: 10px;
    outline-style: none;

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;



    :active {
        border: 2px solid red;
        color: red;
        font-weight: bolder;
    }

    `

    const TimerControlContainerDiv = styled.div`
        border: 1px solid seagreen;


        width: 200px;
        display: flex;
        margin: 0 auto;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        align-content: center;
    
    `


    const TimerControlButton = styled.button`
        // border: 1px solid rebeccapurple;

        // color: #B30000;
        // background: yellow;

        width: 80px;
        height: 25px;

        outline-style: none;
        border-radius: 15px;
    
    
    
    `

    const StartStopButton = styled(TimerControlButton)`
    
        color: ${props => props.timerActive ? '#B30000' : 'seagreen'};
        background: ${props => props.timerActive ? 'pink' : '#C7FFEE'};
        border: ${props => props.timerActive ? '2px solid palevioletred' : '2px solid seagreen'};

        // :active {
        //     border: {$props => props.timerActive ?   '2px solid lightgreen' : '2px solid purple'};
        // }
    `

    const ResetButton = styled(TimerControlButton)`
        color: ${props => props.timerActive ? 'seashell' : 'grey'};
        background: ${props => props.timerActive ? '#525555' : '#C2C8C7'};
        border: ${props => props.timerActive ? '2px solid #9DA1A1' : '2px solid dimgray'};

        :active {
            border: 2px solid ghostwhite;
        }
    `
    const MemButton = styled(TimerControlButton)`
        border: 1px solid lightcoral;
        background: orangered;
        color: lightgrey;
        width: 60px;
    
    `

    const RecallButton = styled(MemButton)`
        border: 1px solid lightseagreen;
        background: darkcyan;
        color: lightgrey;
    
    `


export {
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
    TimerControlButton,
    StartStopButton,
    ResetButton,
    MemButton,
    RecallButton,
};
