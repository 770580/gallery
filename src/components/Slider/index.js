import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    }
  }

  correctIndex(index) {
    if (index < 0) {
      index = this.props.images.length - 1;
    } else if (index > this.props.images.length - 1) {
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
    return (
      <div className='Slider'>
        {this.props.images.map((image, index) => {
          return (
            <img
              key={index} 
              className={(this.state.currentSlide === index) ? '' : 'Slider__image--hidden'} 
              src={image}
              width='680'
              height='410'
              alt='slide'
            />
          )
        })}
        <button onClick={this.changeSlide.bind(this, (this.state.currentSlide - 1))} className='Slider__button Slider__button--previous' type='button'>&#60;</button>
        <button onClick={this.changeSlide.bind(this, (this.state.currentSlide + 1))} className='Slider__button Slider__button--next' type='button'>&#62;</button>
      </div>
    );
  }
}

export default Slider;
