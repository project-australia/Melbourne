import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  resetPassword
} from './../../../redux/actions/auth/actions'

import { HOME } from './../../../config/utils/routes'

class ForgotPassword extends Component {
  state = {
    email: ''
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email } = this.state
    this.props.resetPassword(email)
  }

  render () {
    const { email } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div >
            <h1>Recover Password</h1>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
        <p><Link to={HOME}>HOME</Link></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(resetPassword(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
