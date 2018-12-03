import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './Brand.css';
import Logo from '../../Assets/Logo.png';
import Login from '../Login/Login';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          brand="Squad Projects App"
          className="nav pink lighten-3 center-align "
        >
          <NavItem>
            <img className="logo" src={Logo} alt="Logo" />
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
