import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../components/layout'
import UsersList from './list'
import UsersWrapper from './users.style'
import { getUsers, setLocation } from '../actions'

class Users extends Component {

  inputChange = e => {
    
    const { location } = this.props
    this.props.dispatch(
      setLocation(e.target.value)
    )
  }

  getUsers = () => {
    this.props.dispatch(getUsers(this.props.location))
  }

  render() {
    const { error } = this.props
    return (
      <Layout>
        <UsersWrapper>
          <h1>Search Github Users</h1>
          <div className="form-fields">
            <div>
              <input
                type='text'
                name='location'
                placeholder="Location"
                onChange={this.inputChange}/>
              <button onClick={this.getUsers} className="button">Submit</button>
            </div>
            {error && <span className="error">{error}</span>}
          </div>
          <UsersList />
        </UsersWrapper>
      </Layout>
    )
  }
}


const mapStateToProps = ({ location, error }) => ({ location, error })

export default connect(mapStateToProps)(Users)
