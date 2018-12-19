import React, { Component } from "react";

import "./App.css";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="bloc">
          <p className="number">00</p>
          <p className="title">Hour</p>
        </div>
        <div className="bloc">
          <p className="number">:</p>
          <p className="title" />
        </div>
        <div className="bloc">
          <p className="number">30</p>
          <p className="title">Minute</p>
        </div>
        <div className="bloc">
          <p className="number">:</p>
          <p className="title" />
        </div>
        <div className="bloc">
          <p className="number">00</p>
          <p className="title">Second</p>
        </div>
      </div>
    );
  }
}

export default Counter;
