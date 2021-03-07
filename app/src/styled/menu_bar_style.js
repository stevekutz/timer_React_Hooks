import styled from 'styled-components';


const MenuBarContainer = styled.div`
    border: 3px solid red;
    background: #111B20;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    // width: 100%;
    max-width: 100vw;
    height: 35px;
    // background: #111B20;
    
    // z-index: 10;
`

const IconImageContainer = styled.div`
    cursor: pointer;
    height: 26px;
    weight: 26px;
    margin: 5px;
`

const IconImage = styled.img`
    color: white;
    height: 25px;
    width: 25px;
    z-indez: 0;
`


const MenuBarOptions = styled.div`



`

export {
    MenuBarContainer,
    IconImageContainer,
    IconImage,

};