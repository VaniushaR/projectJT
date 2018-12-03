import React, { Component } from 'react';
import './App.css';
import Brand from './Components/Brand/Brand';
import FooterC from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Splash from './Components/Splash/Splash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      splashEnded: false
    };
  }

  componentDidMount() {
    if (!this.state.splashEnded) {
      setTimeout(() => this.setState({ splashEnded: true }), 2000);
    }
  }

  render() {
    if (!this.state.splashEnded) {
      return <Splash />;
    }
    return (
      <div>
        <Brand />
        <Login />
        <FooterC />
      </div>
    );
  }
}

export default App;
