import React, { Component } from 'react'
import { connect } from 'react-redux'

import UsersList from './list'
import UsersWrapper from './users.style'
import { getUsers } from '../actions'

class Users extends Component {
  getUsers = () => {
    this.props.dispatch(getUsers())
  }

  render() {
    const { title } = this.props
    return (
      <UsersWrapper>
        <h1>{title}</h1>
        <div className="form-fields">
          <input type='text' name='location' placeholder="Location"/>
          <button onClick={this.getUsers}>Submit</button>
        </div>
        <UsersList />
      </UsersWrapper>
    )
  }
}

export default connect(null)(Users)
