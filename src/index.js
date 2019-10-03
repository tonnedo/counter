import React, { Component } from 'react';
import { render } from 'react-dom';
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: this.props.start
    }

    this.handleClickPlus = this.handleClickPlus.bind(this)
    this.handleClickMinus = this.handleClickMinus.bind(this)
  }

  handleClickPlus () {
    if(this.state.count >= this.props.max) {
      return
    }

    this.setState({
      count: this.state.count + 1
    })
  }

  handleClickMinus () {
    if (this.state.count <= this.props.min) {
      return;
    }

    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { count } = this.state

    return (
      <div className="flex">
        <button className="btn" onClick={this.handleClickMinus}>-</button>
          <div className="counter">{count}</div>
        <button className="btn" onClick={this.handleClickPlus}>+</button>
      </div>
      )
  }
}

render(<Counter start={0} min={-10} max={10} />, document.getElementById('btn'))