import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.images = this.props.images;
    this.state = {
      currentSlider: 0
    }
  }

  computeNextSlider(direction) {
    direction = (direction === 'left') ? direction = -1 : 1;
    let nextSlider = this.state.currentSlider + direction;

    if (nextSlider < 0) {
      nextSlider = this.images.length - 1;
    } else if (nextSlider > this.images.length - 1) {
      nextSlider = 0;
    }

    return nextSlider;
  }

  changeSlider(direction) {
    const nextSlider = this.computeNextSlider(direction)
    
    this.refs[nextSlider].className = '';
    this.refs[this.state.currentSlider].className = 'Slider__image--hidden';

    this.setState({
      currentSlider: nextSlider
    });
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
        <button onClick={this.changeSlider.bind(this, 'left')} className='Slider__button Slider__button--previous' type='button'>&#60;</button>
        <button onClick={this.changeSlider.bind(this)} className='Slider__button Slider__button--next' type='button'>&#62;</button>
      </div>
    );
  }
}

export default Slider;
