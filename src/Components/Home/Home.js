import React, { Component } from 'react';
import { db } from '../Services/Firebase';
import firebase from '../Services/Firebase';
import { Row, Col, Card } from 'react-materialize';
import './Home.css';
import Projects from '../Projects/Projects';

class Home extends Component {
  render() {
    //if the User have an a succesful login:
    return (
      <div>
        <Row>
          <Col s={6} m={6} l={6}>
            <h2>My projects</h2>
          </Col>
          <Col s={5} m={5} l={5}>
            <h2 className="user-name">
              {firebase.auth().currentUser.displayName}
            </h2>
          </Col>
          <Col s={1} m={1} l={1}>
            <img
              alt="user picture"
              src={firebase.auth().currentUser.photoURL}
              className="user-pic"
            />
          </Col>
        </Row>
        <Projects />
      </div>
    );
  }
}

export default Home;
