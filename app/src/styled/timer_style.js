import styled from 'styled-components';

const TimerContainerDiv = styled.div`
    border: 4px solid blue;
    display: flex;
    flex-direction: column;
    justifyContent: flex-end;
    width: 50%;
    margin: 0 auto;
    // background: darkslategrey;



`;

const InfoDiv = styled.div`
    border: 1px solid green;
    // background: white;  

    display: flex;
    justifyContent: center;
    alignContent: center;
    color: yellow;
    width: 50%;
    margin: 0 auto;
    textAlign: center;

`

export {
    TimerContainerDiv,
    InfoDiv,
}