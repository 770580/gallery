import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.images = this.props.images;
    this.state = {
      currentSlide: 0
    }
  }

  correctIndex(index) {
    if (index < 0) {
      index = this.images.length - 1;
    } else if (index > this.images.length - 1) {
      index = 0;
    }
    return index;
  }

  changeSlide(index) {
    this.setState({
      currentSlide: this.correctIndex(index)
    });
  }

  render() {
    const images = this.images.map((image, index) => {
      let imgStyle = 'Slider__image--hidden';

      if (this.state.currentSlide === index) {
        imgStyle = '';
      }

      return (
        <img key={index} className={imgStyle} src={image} width='680' height='410' alt='slide' />
      )
    });

    return (
      <div className='Slider'>
        {images}
        <button onClick={this.changeSlide.bind(this, (this.state.currentSlide - 1))} className='Slider__button Slider__button--previous' type='button'>&#60;</button>
        <button onClick={this.changeSlide.bind(this, (this.state.currentSlide + 1))} className='Slider__button Slider__button--next' type='button'>&#62;</button>
      </div>
    );
  }
}

export default Slider;
