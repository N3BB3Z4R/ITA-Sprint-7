import React from 'react';
import { NavBarStyle } from './NavBar.styles';

const NavBar = (props) => {
  return (
    <NavBarStyle className="NavBarWrapper">
      <h2 name="Title">
        {props.title}
      </h2>        
    </NavBarStyle>
  );
}

export default NavBar;
