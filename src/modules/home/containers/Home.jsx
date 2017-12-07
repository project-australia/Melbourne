import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionFullWidth from './../../shared/components/grid/SectionFullWidth'

import {
  signOut
} from './../../../redux/actions/auth/actions'

class Home extends Component {
  render () {
    const { logged } = this.props
    return (
      <SectionFullWidth>
        home
      </SectionFullWidth>
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
