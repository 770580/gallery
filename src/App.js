import React, { Component } from 'react';
import Slider from './components/Slider';
import './App.css';

const images = [
  'http://ru2.anyfad.com/items/t1@bd097733-3fd8-43cf-b554-9ac41c1fe2d1/Bolshaya-belaya-akula.jpg',
  'http://urbanzen.org/wp-content/uploads/2013/06/Global-Water-Dance.jpg',
  'http://image.prntscr.com/image/f44dd8e9274444d68efc246784255a90.jpg'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider images={images} />
      </div>
    );
  }
}

export default App;
