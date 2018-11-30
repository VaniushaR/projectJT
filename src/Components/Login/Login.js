import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Navbar,
  NavItem,
  Icon
} from 'react-materialize';
import './Login.css';
import Logo from '../../Assets/Logo.png';
import Home from '../Home/Home';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../Services/Firebase';

class Login extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSucces: () => false
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  }

  render() {
    //Conditional rendering:
    return (
      <div>
        {this.state.isSignedIn ? (
          <div>
            <Home />
          </div>
        ) : (
          <div className="card-login">
            <Row>
              <Col m={3} s={3} l={3} />
              <Col m={6} s={6} l={6}>
                <Card
                  className="white"
                  textClassName="black-text"
                  title="Welcome"
                  actions={[
                    <div>
                      <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                      />
                    </div>
                  ]}
                >
                  Sign in to Start!
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default Login;

/*
 constructor() {
    super();
    this.state = {
      user: null,
      pictures: []
    };
    //this.LoginFB = this.LoginFB.bind(this);
    //this.LoginGoogle = this.LoginGoogle.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }
*/
