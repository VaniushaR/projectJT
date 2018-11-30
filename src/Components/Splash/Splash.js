import React, { Component } from 'react';
import Brand from '../../Assets/Brand.png';

class Splash extends Component {
  render() {
    return (
      <div>
        <img className="brand-logo-splash" src={Brand} alt="Brand Logo" />
      </div>
    );
  }
}

export default Splash;
