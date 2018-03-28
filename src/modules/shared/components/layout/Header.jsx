import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionCentered from './../grid/SectionCentered'
import LoggedMenu from './header/LoggedMenu'
import AdminMenu from './header/AdminMenu'
import DefaultMenu from './header/DefaultMenu'

import { signOut } from './../../../../redux/actions/auth/actions'

import './../../style/header.css'

class Header extends Component {
  logOff = () => this.props.signOut()
  render () {
    const { logged } = this.props
    return (
      <SectionCentered>
        {!logged && <DefaultMenu />}
        {logged && <LoggedMenu logoutFunc={this.logOff} />}
        {logged && <AdminMenu />}
      </SectionCentered>
    )
  }
}

Header.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
