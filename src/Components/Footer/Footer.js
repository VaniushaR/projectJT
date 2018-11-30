import React from 'react';
import { Footer } from 'react-materialize';

const FooterC = () => {
  return (
    <Footer
      copyrights="JaxiTank Project 2018 Copyright"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
          Vania Ramírez
        </a>
      }
      className="pink lighten-3"
    />
  );
};

export default FooterC;
