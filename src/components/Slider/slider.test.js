import React from 'react';
import { shallow, render } from 'enzyme';
import Slider from '../Slider';

const images = [
  'https://js.cx/carousel/1.png',
  'https://js.cx/carousel/2.png',
  'https://js.cx/carousel/3.png',
  'https://js.cx/carousel/4.png',
  'https://js.cx/carousel/5.png',
  'https://js.cx/carousel/6.png',
  'https://js.cx/carousel/7.png',
  'https://js.cx/carousel/8.png',
  'https://js.cx/carousel/9.png',
  'https://js.cx/carousel/10.png',
]

let slidesToShow = 3;

let slider;

beforeEach(() => {
  slider = shallow(<Slider images={images} slidesToShow={slidesToShow} />);
});

it('renders without crashing', () => {
  shallow(<Slider images={images} />);
});

describe('images', () => {
  it('all images rendered', () => {
    expect(slider.find('.Slider__item').length).toBe(images.length + 2);
  });

  it('on init active 3-th image', () => {
    expect(slider.find('.Slider__item--visible').length).toBe(slidesToShow);
  });
});

describe('buttons', () => {
  let prevButton, nextButton;

  beforeEach(() => {
    prevButton = slider.find('.Slider__button--previous');
    nextButton = slider.find('.Slider__button--next');
  });

  it('click next button', () => {
    nextButton.simulate('click');
    expect(slider.find('.Slider__item--visible').first().html()).toContain(images[1]);
  });

  it('click prev button', () => {
    prevButton.simulate('click');
    expect(slider.find('.Slider__item--visible').last().html()).toContain(images[9]);
  });
});

describe('dots', () => {
  it('all dots rendered', () => {
    expect(slider.find('.Slider__dot').length).toBe(images.length);
  });

  it('on init active first dot', () => {
    expect(slider.find('.Slider__dot').first().html()).toContain('Slider__dot--active');
  });

  it('should be actively 2nd image by pressing the 2nd dot', () => {
    const dot = slider.find('.Slider__dot').at(1);
    dot.simulate('click');

    expect(slider.find('.Slider__item--visible').first().html()).toContain(images[1]);
  });

  it('should be actively 2nd dot by pressing the 2nd dot', () => {
    const dot = slider.find('.Slider__dot').at(1);
    dot.simulate('click');

    expect(slider.find('.Slider__dot').at(1).html()).toContain('Slider__dot--active');
  });
});

