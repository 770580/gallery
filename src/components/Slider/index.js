import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        <img src="./img/slide-1.jpg" width="680" height="410" alt="slide" />
        <button className="Slider__button Slider__button--previous" type="button">&#60;</button>
        <button className="Slider__button Slider__button--next" type="button">&#62;</button>
      </div>
    );
  }
}

export default Slider;
