import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import firebase from '../Services/Firebase';

const Navigation = () => {
  return (
    <div>
      <Navbar brand="🤓" className="pink lighten-4 login-nav" right>
        <NavItem href="https://vaniushar.github.io">Portfolio</NavItem>
        <NavItem href="https://github.com/VaniushaR/projectJT">Code</NavItem>
        <NavItem onClick={() => firebase.auth().signOut()}>
          <i className="fas fa-sign-out-alt" />
        </NavItem>
      </Navbar>
    </div>
  );
};

export default Navigation;
