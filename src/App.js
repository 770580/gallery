import React, { Component } from 'react';
import Slider from './components/Slider';

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

const slidesToShow = 5;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider images={images} slidesToShow={slidesToShow} />
      </div>
    );
  }
}

export default App;
