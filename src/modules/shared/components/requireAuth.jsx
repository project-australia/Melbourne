import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import history from './../../../config/historyRouter'

import {
  LOGIN,
  NOT_AUTHORIZED,
  ADM_BOOKS,
  ADM_DASHBOARD,
  ADM_USERS,
  ADM_ORDERS
} from './../../../config/constants/appRoutes'

export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount () {
      if (!this.props.logged) {
        this.redirectNotLoggedIn()
      }
    }

    componentWillReceiveProps (nextProps) {
      if (!nextProps.logged) {
        this.redirectNotLoggedIn()
      }
    }

    redirectNotLoggedIn = () => {
      history.push(LOGIN)
    }

    redirectNotAuthorized = () => {
      history.push(NOT_AUTHORIZED)
    }

    checkAuthorization = () => {
      const protecedRoutes = [ ADM_BOOKS, ADM_DASHBOARD, ADM_ORDERS, ADM_USERS ]
      if (protecedRoutes.indexOf(this.props.match.url) > -1) {
        return this.props.role === 'ADMIN'
      }
      return true
    }

    render () {
      return this.checkAuthorization() ? <ComposedComponent {...this.props} /> : <Redirect to={NOT_AUTHORIZED} push={true} />
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
      logged: state.auth.logged,
      role: state.user.profile.role
    }
  }

  return connect(mapStateToProps, null)(Authenticate)
}
