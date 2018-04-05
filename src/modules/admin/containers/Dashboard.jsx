import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import CommonHeader from '../components/CommonHeader'

import './style/dashboard.css'

class Dashboard extends Component {
  render () {
    return (
      <SectionCentered>
        <CommonHeader
          iconName="dashboard"
          title="Dashboard"
        />
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

export default connect(mapStateToProps)(Dashboard)
