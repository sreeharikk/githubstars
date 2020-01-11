import React, { Component } from 'react'
import { connect } from 'react-redux'

import { reset } from '../actions'

class Counter extends Component {
  increment = () => {
    // this.props.dispatch(increment())
  }

  reset = () => {
    this.props.dispatch(reset())
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count })
export default connect(mapStateToProps)(Counter)
