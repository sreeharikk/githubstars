import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUsers } from '../actions'

class Users extends Component {
  getUsers = () => {
    console.log('getUsers')
    this.props.dispatch(getUsers())
  }

  render() {
    const { title } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <input type='text' name='location' placeholder="Location"/>
        <button onClick={this.getUsers}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count })
export default connect(mapStateToProps)(Users)
