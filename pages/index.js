import React from 'react'
import { connect } from 'react-redux'
import Page from '../components/page'

class Index extends React.Component {
  static async getInitialProps(props) {
  }

  render() {
    return <Page title="Index Page" />
  }
}

export default connect()(Index)
