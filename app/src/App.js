import React from 'react';

import Timer from './comp/Timer';
import Menu from './comp/Menu';

import {
    AppContainerDiv,
} from './styled/app_styled';

import { Slider } from 'antd';
import './App.css';

function App() {
  return (

    <AppContainerDiv>
        <Menu />
        <Timer />
    </AppContainerDiv>
  );
}

export default App;
