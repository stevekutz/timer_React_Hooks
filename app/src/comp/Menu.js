import React from 'react';
import burger from '../assets/img/Hamburger.png';


import {
    MenuBarContainer,
    IconImageContainer,
    IconImage,

} from '../styled/menu_bar_style';


const MenuBar = (props) => {

    return (
        <MenuBarContainer>
            <IconImageContainer>
                <IconImage src = {burger}/>
            </IconImageContainer>

        </MenuBarContainer>
    )

}

export default MenuBar;