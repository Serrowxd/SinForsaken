import React, { Component } from 'react';

import img from '../assets/sincakenbd.png';

class Nav extends Component {
  state = {
    filler: ['OwO'],
  };
  render() {
    return (
      <div className="nav_bkg">
        <div className="nav_div">
          <h4> {this.state.filler} </h4>
          <h4> {this.state.filler} </h4>
          <h4> {this.state.filler} </h4>
          <img src={img} class="img" />
          <h4> {this.state.filler} </h4>
          <h4> {this.state.filler} </h4>
          <h4> {this.state.filler} </h4>
        </div>
      </div>
    );
  }
}

export default Nav;
