import React, { Component } from 'react';
import '../css/main.css';

// Imports

import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <div className="background_image">
        <Nav />
      </div>
    );
  }
}

export default Home;
