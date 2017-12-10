import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AppBar } from 'material-ui'

import SectionFullWidth from './../grid/SectionFullWidth'

import {
  signOut
} from './../../../../redux/actions/auth/actions'

import { navBar } from './../../style/headerStyle'

import './../../style/header.css'

class Header extends Component {
  render () {
    return (
      <SectionFullWidth>
        <AppBar
          title='Ballard Book'
          className='nav-main'
          showMenuIconButton={false}
          style={navBar}
        />
      </SectionFullWidth>
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
