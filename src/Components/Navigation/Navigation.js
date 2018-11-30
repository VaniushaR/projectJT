import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './Navigation.css';
import Logo from '../../Assets/Logo.png';
import Login from '../Login/Login';
import FooterC from '../Footer/Footer';
import Splash from '../Splash/Splash';

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
        <Login />
        <Splash />
        <FooterC />
      </div>
    );
  }
}

export default NavBar;
