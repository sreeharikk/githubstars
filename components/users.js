import React, { Component } from 'react'
import { connect } from 'react-redux'

import UsersList from './list'
import { getUsers } from '../actions'

class Users extends Component {
  getUsers = () => {
    this.props.dispatch(getUsers())
  }

  render() {
    const { title } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <input type='text' name='location' placeholder="Location"/>
        <button onClick={this.getUsers}>Submit</button>
        <UsersList />
      </div>
    )
  }
}

export default connect(null)(Users)
