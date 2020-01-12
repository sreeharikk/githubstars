import React, { Component } from 'react'
import { connect } from 'react-redux'


import Layout from '../components/layout'
import UsersList from './list'
import Button from './button'
import UsersWrapper from './users.style'
import { getUsers, setLocation } from '../actions'

class Users extends Component {

  inputChange = e => {
    this.props.dispatch(
      setLocation(e.target.value)
    )
  }

  getUsers = () => {
    this.props.dispatch(getUsers(this.props.location))
  }

  render() {
    const { error, loading } = this.props
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
                <Button
                  label="Submit"
                  loading={loading}
                  onClick={this.getUsers}
                 />
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
