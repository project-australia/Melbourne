import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import If from './../../shared/components/helpers/If'

import {
  signOut
} from './../../../redux/actions/auth/actions'

class Home extends Component {
  render () {
    const { logged } = this.props
    return (
      <div>
        <h1>Home</h1><br /><br />
        <If test={!logged}>
          <Link className="btn btn-default" to="/login">Login</Link><br />
        </If>
        <If test={logged}>
          <button onClick={this.props.signOut}>Logout</button><br />
        </If>
        <Link className="btn btn-default" to="/restricArea">RestrictArea</Link>
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
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
