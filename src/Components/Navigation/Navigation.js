import React, { Component } from 'react';
import { Navbar, NavItem, Col, Modal, Button } from 'react-materialize';
import firebase from '../Services/Firebase';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="pink lighten-4">
          <NavItem>
            <Modal
              header="Team Members:"
              trigger={
                <span>
                  Team Members <i className="fas fa-users" />
                </span>
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Modal>
          </NavItem>
          <NavItem onClick={() => firebase.auth().signOut()}>
            <span>Log Out</span> <i class="fas fa-sign-out-alt"> </i>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
