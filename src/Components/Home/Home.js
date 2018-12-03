import React, { Component } from 'react';
import firebase from '../Services/Firebase';
import { Row, Col } from 'react-materialize';
import './Home.css';
import Projects from '../Projects/Projects';

class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={4} m={4} l={4}>
            <h2>My projects</h2>
          </Col>
          <Col s={6} m={6} l={6}>
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
