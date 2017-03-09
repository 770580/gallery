import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    let visibleSlides = [];
    for (let i = 0; i < this.props.slidesToShow; i += 1) {
      visibleSlides.push(i);
    }
    this.state = {
      currentSlide: 0,
      visibleSlides: visibleSlides
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

  correctSlides(index) {
    return this.state.visibleSlides.map( slide => {
      slide += this.correctIndex(index) - this.state.currentSlide;
      if (slide > this.props.images.length - 1) {
        slide -= this.props.images.length;
      } else if (slide < 0) {
        slide += this.props.images.length;
      }
      return slide;
    });
  }

  changeSlide(index) {
    this.setState({
      currentSlide: this.correctIndex(index),
      visibleSlides: this.correctSlides(index)
    });
  }

  render() {
    return (
      <div className='Slider'>
        <ul className='Slider__list'>
          <li className='Slider__item'>
            <button
              onClick={this.changeSlide.bind(this, (this.state.currentSlide - 1))}
              className='Slider__button Slider__button--previous' type='button'
            >
              &#60;
            </button>
          </li>
          {this.props.images.map((image, index) => {
            return (
              <li
                key={index}
                className='Slider__item'
                style={{order: this.state.visibleSlides.indexOf(index)}} >
                <img
                  className={`Slider__image ${(this.state.visibleSlides.indexOf(index) !== -1) ? 'Slider__image--visible' : 'Slider__image--hidden'}`} 
                  src={image}
                  alt='slide'
                />
              </li>
            )
          })}
          <li className='Slider__item' style={{order: 2000}}>
            <button
              onClick={this.changeSlide.bind(this, (this.state.currentSlide + 1))}
              className='Slider__button Slider__button--previous' type='button'
            >
              &#62;
            </button>
          </li>
        </ul>
        <ul className='Slider__dots'>
          {this.props.images.map((dot, index) => {
            return (
              <li
                key={index}
                className={`Slider__dot ${(this.state.currentSlide === index) ? 'Slider__dot--active' : ''}`}
                onClick={this.changeSlide.bind(this, index)}
              />
            )
          })}
        </ul>
      </div>
    );
  }
}

Slider.propTypes = {
  images: React.PropTypes.array,
  slidesToShow: function(props, propName, componentName) {
    if (props[propName] % 2 === 0) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed. Should be odd'
      );
    }
  },
}

export default Slider;
