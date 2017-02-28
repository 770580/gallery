import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.images = this.props.images;
    this.state = {
      visibleSlide: 0
    }
  }

  computeNextSlide(direction) {
    direction = (direction === 'left') ? direction = -1 : 1;
    let nextSlide = this.state.visibleSlide + direction;

    if (nextSlide < 0) {
      nextSlide = this.images.length - 1;
    } else if (nextSlide > this.images.length - 1) {
      nextSlide = 0;
    }

    return nextSlide;
  }

  changeSlide(direction) {
    const nextSlide = this.computeNextSlide(direction);
    this.setState({
      visibleSlide: nextSlide
    });
  }

  render() {
    const images = this.images.map((image, index) => {
      let imgStyle = 'Slider__image--hidden';
      if (this.state.visibleSlide === index) {
        imgStyle = '';
      }

      return (
        <img key={index} className={imgStyle} src={image} width='680' height='410' alt='slide' />
      )
    });

    return (
      <div className='Slider'>
        {images}
        <button onClick={this.changeSlide.bind(this, 'left')} className='Slider__button Slider__button--previous' type='button'>&#60;</button>
        <button onClick={this.changeSlide.bind(this)} className='Slider__button Slider__button--next' type='button'>&#62;</button>
      </div>
    );
  }
}

export default Slider;
