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
import './Home.css';
import Logo from '../../Assets/Logo.png';

class Home extends Component {
  render() {
    //if User have an a succesful login:
    return (
      <div>
        <Navbar className="pink lighten-4">
          <NavItem href="get-started.html">
            <Col s={6} m={6} l={6}>
              <span> Team Members </span>
              <i className="fas fa-users" />
            </Col>
          </NavItem>

          <NavItem>
            <span>Log Out</span> <i class="fas fa-sign-out-alt"> </i>
          </NavItem>
        </Navbar>
        <Row>
          <Col s={6} m={6} l={6}>
            <h2>My projects</h2>
          </Col>
          <Col s={5} m={5} l={5}>
            <h2 className="user-name">User Name</h2>
          </Col>
          <Col s={1} m={1} l={1}>
            <img alt="user picture" src={Logo} className="user-pic" />
          </Col>
        </Row>
        <section className="panel">
          <Col m={6} s={12}>
            <Card
              className="blue lighten-5"
              textClassName="black-text"
              title="Agregar nuevo"
              actions={[<a href="#">ADD</a>]}
            >
              <input placeholder="Project's Name" />
              <input placeholder="Description" />
            </Card>
          </Col>
          <Col m={6} s={12}>
            <Card
              className="white"
              textClassName="black-text"
              title="Project's Name"
              actions={[
                <div>
                  <a href="#">Edit</a>
                  <a href="#">Delete</a>{' '}
                </div>
              ]}
            >
              <p>Project's Description</p>
            </Card>
          </Col>
        </section>
      </div>
    );
  }
}

export default Home;
