import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
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
    //conditional rendering:
    if (!this.state.splashEnded) {
      return <Splash />;
    }
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default App;
