import React from 'react'
import { connect } from 'react-redux'
import Users from '../components/users'

class Index extends React.Component {
  static async getInitialProps(props) {
  }

  render() {
    return <Users />
  }
}

export default connect()(Index)
