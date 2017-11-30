import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import history from './../../../config/utils/historyRouter'
import { login } from './../../../config/utils/routes'

export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount () {
      if (!this.props.logged) {
        this.redirectNotLoggedIn()
      }
    }

    componentWillReceiveProps (nextProps) {
      if (!this.props.logged) {
        this.redirectNotLoggedIn()
      }
    }

    redirectNotLoggedIn = () => {
      history.push(login)
    }

    render () {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  Authenticate.propTypes = {
    logged: PropTypes.bool.isRequired
  }

  Authenticate.defaultProps = {
    logged: false
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      logged: state.auth.logged
    }
  }

  return connect(mapStateToProps, null)(Authenticate)
}
