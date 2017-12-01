import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from './../../../config/utils/historyRouter'

import {
  signinSignup
} from './../../../redux/actions/auth/actions'
import {
  restrictedArea,
  home,
  forgotPassword
} from './../../../config/utils/routes'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.logged) {
      history.push(restrictedArea)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.signinSignup(email, password)
  }

  render () {
    const { email, password } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div >
            <h1>Sign In / Sign Up</h1>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="email@email.com"
            /><br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="secury password"
            /><br /><br />
            <button onClick={this.handleSubmit}> Sign In </button>
            <button onClick={this.handleSubmit}> Sign Up </button>
          </div>
        </form>
        <p><Link to={home}>home</Link></p>
        <p><Link to={forgotPassword}>Forgot your password?</Link></p>
      </div>
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
