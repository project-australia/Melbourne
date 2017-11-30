import React, { Component } from 'react'
import { connect } from 'react-redux'

import history from './../../../config/utils/historyRouter'

export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount () {
      if (!this.props.logged) {
        this.redirectNotLoggedIn()
      }
    }

    componentWillUpdate (nextProps) {
      if (!this.props.logged) {
        this.redirectNotLoggedIn()
      }
    }

    redirectNotLoggedIn = () => {
      history.push('/login')
    }

    render () {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      logged: state.auth.logged
    }
  }

  return connect(mapStateToProps, null)(Authenticate)
}
