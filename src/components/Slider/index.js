import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.images = this.props.images;
    this.state = {
      currentSlider: 0,
      previousSlider: 0
    }
  }

  changeSlidersState(currentSlider, previousSlider) {
    this.refs[currentSlider].className = '';
    this.refs[previousSlider].className = 'Slider__image--hidden';

    this.setState({
      currentSlider: currentSlider,
      previousSlider: previousSlider
    });
  }

  previousSlider() {
    const previousSlider = this.state.currentSlider;
    let currentSlider = this.state.currentSlider - 1;

    if (currentSlider < 0) {
      currentSlider = this.images.length - 1;
    }
    
    this.changeSlidersState(currentSlider, previousSlider);
  }

  nextSlider() {
    const previousSlider = this.state.currentSlider;
    let currentSlider = this.state.currentSlider + 1;

    if (currentSlider > this.images.length - 1) {
      currentSlider = 0;
    }

    this.changeSlidersState(currentSlider, previousSlider);
  }

  render() {
    const images = this.images.map((image, index) => {
      const initialClass = (index !== 0) ? 'Slider__image--hidden' : '';
      return (
        <img ref={index} key={index} className={initialClass} src={image} width='680' height='410' alt='slide' />
      )
    });

    return (
      <div className='Slider'>
        {images}
        <button onClick={this.previousSlider.bind(this)} className='Slider__button Slider__button--previous' type='button'>&#60;</button>
        <button onClick={this.nextSlider.bind(this)} className='Slider__button Slider__button--next' type='button'>&#62;</button>
      </div>
    );
  }
}

export default Slider;
