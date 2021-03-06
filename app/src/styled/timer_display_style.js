import styled, {css} from 'styled-components';

const DisplayContainerDiv = styled.div`
    
    border: 3px solid deeppink;
    width: 250px;
    color: red;
    padding:
    display: flex;
    margin: 0 auto;



`;

const DisplayDigitContainerDiv = styled.div`
    border: 5px solid purple;
    
    width: 170px;
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

const DisplayDigitsControllerCoontainer = styled.div`
    border: 1px solid orange;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 54px;
    height: 90px;

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
    width: 20px;
    height: 25px;
    color: lightgray;
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



    :active {
        border: 2px solid red;
        color: red;
        font-weight: bolder;
    }

`


export {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitTextDiv,
    DisplayTimeUnitContainerDiv,
    DisplayDigitsControllerCoontainer,
    IncDecControlButton,
};
