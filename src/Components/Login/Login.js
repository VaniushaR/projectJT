import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import './Login.css';
import Home from '../Home/Home';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../Services/Firebase';
import Navigation from '../Navigation/Navigation';

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
            <Navigation />
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
