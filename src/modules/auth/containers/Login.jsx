import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from './../../../config/historyRouter'
import SectionCentered from './../../shared/components/grid/SectionCentered'

import {
  signinSignup
} from './../../../redux/actions/auth/actions'

import {
  HOME
} from './../../../config/constants/routes'

import LoginForm from '../components/LoginForm'

import './../style/login.css'

class Login extends Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.logged) {
      history.push(HOME)
    }
  }

  handleSubmit = (email, password) => {
    this.props.signinSignup(email, password)
  }

  render () {
    return (
      <SectionCentered>
        <LoginForm submit={this.handleSubmit} />
      </SectionCentered>
    )
  }
}

Login.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  return {
    logged: state.auth.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signinSignup: (email, password) => dispatch(signinSignup(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
