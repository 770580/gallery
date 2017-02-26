import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.images = this.props.images;
    this.currentSlider = 0;
  }

  previousSlider() {
    const newCurrentSlider = this.currentSlider - 1;
    this.currentSlider = ( newCurrentSlider < 0 ) ? 
      this.images.length - 1 :
      newCurrentSlider;
    this.forceUpdate();
  }

  nextSlider() {
    const newCurrentSlider = this.currentSlider + 1;
    this.currentSlider = ( newCurrentSlider > this.images.length - 1 ) ? 
      0 :
      newCurrentSlider;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="Slider">
        <img src={this.images[this.currentSlider]} width="680" height="410" alt="slide" />
        <button onClick={this.previousSlider.bind(this)} className="Slider__button Slider__button--previous" type="button">&#60;</button>
        <button onClick={this.nextSlider.bind(this)} className="Slider__button Slider__button--next" type="button">&#62;</button>
      </div>
    );
  }
}

export default Slider;
