import React from 'react';
import { shallow, render } from 'enzyme';
import Slider from '../Slider';

const images = [
  'http://ru2.anyfad.com/items/t1@bd097733-3fd8-43cf-b554-9ac41c1fe2d1/Bolshaya-belaya-akula.jpg',
  'http://urbanzen.org/wp-content/uploads/2013/06/Global-Water-Dance.jpg',
  'http://image.prntscr.com/image/f44dd8e9274444d68efc246784255a90.jpg'
]

let slider;

beforeEach(() => {
  slider = shallow(<Slider images={images} />);
});

it('renders without crashing', () => {
  shallow(<Slider images={images} />);
});

describe('images', () => {
  it('all images rendered', () => {
    expect(slider.find('.Slider__image').length).toBe(3);
  });

  it('on init active first image', () => {
    expect(slider.find('.Slider__image--visible').html()).toContain(images[0]);
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
    expect(slider.find('.Slider__image--visible').html()).toContain(images[1]);
  });

  it('click prev button', () => {
    prevButton.simulate('click');
    expect(slider.find('.Slider__image--visible').html()).toContain(images[2]);
  });
});

describe('dots', () => {
  it('all dots rendered', () => {
    expect(slider.find('.Slider__dot').length).toBe(3);
  });

  it('on init active first dot', () => {
    expect(slider.find('.Slider__dot').first().html()).toContain('Slider__dot--active');
  });

  it('should be actively 2nd image by pressing the 2nd dot', () => {
    const dot = slider.find('.Slider__dot').at(1);
    dot.simulate('click');

    expect(slider.find('.Slider__image--visible').html()).toContain(images[1]);
  });

  it('should be actively 2nd dot by pressing the 2nd dot', () => {
    const dot = slider.find('.Slider__dot').at(1);
    dot.simulate('click');

    expect(slider.find('.Slider__dot').at(1).html()).toContain('Slider__dot--active');
  });
});

