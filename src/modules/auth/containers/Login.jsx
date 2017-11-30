import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from './../../../config/utils/historyRouter'

import { Link } from 'react-router-dom'

import {
  SignInOrSignUp
} from './../../../redux/actions/auth/actions'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.logged) {
      history.push('/restricArea')
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    console.log('Submit', email, password)
    this.props.SignInOrSignUp(email, password)
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
        <p><Link to="/">home</Link></p>
        <p><Link to="/forgotPassword">Forgot your password?</Link></p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    logged: state.auth.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SignInOrSignUp: (email, password) => dispatch(SignInOrSignUp(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
