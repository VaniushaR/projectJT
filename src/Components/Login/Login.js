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

class Login extends Component {
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

  render() {
    //View 1 Layout
    return (
      <div>
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
                    <a href="#">
                      <Button className="waves-light red">
                        <i class="fab fa-google" /> Google
                      </Button>
                    </a>
                    <br />
                    <br />
                    <a href="#">
                      <Button className="waves-light blue darken-3">
                        <i class="fab fa-facebook" /> Facebook
                      </Button>
                    </a>
                  </div>
                ]}
              >
                Sign in to Start!
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default Login;
