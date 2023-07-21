import React from 'react';
import './Main.css'; // Assuming you have a CSS file for styling
import { Element } from 'react-scroll';

const Main = () => {
  return (
    <Element name="main">
      <div className="main-header">
        <div className="overlay-text">
          <h1>Welcome to Ilan's Burgers Inc.</h1>
        </div>
      </div>
    </Element>
  );
}

export default Main;
