import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import If from './../../shared/components/helpers/If'
import { restrictedArea, login } from './../../../config/utils/routes'
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
          <Link to={login}>Login</Link><br />
        </If>
        <If test={logged}>
          <button onClick={this.props.signOut}>Logout</button><br />
        </If>
        <Link to={restrictedArea}>Restricted Area</Link>
      </div>
    )
  }
}

Home.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
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
