import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import ProductivityColumns from '../components/ProductivityColumns'

import {
  signOut
} from './../../../redux/actions/auth/actions'

import './../style/dashboard.css'

class Dashboard extends Component {
  render () {
    return (
      <SectionCentered>
        <ProductivityColumns />
      </SectionCentered>
    )
  }
}

Dashboard.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
