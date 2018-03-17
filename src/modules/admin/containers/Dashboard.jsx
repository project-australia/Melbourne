import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionCentered from './../../shared/components/grid/SectionCentered'

import './style/dashboard.css'

class Dashboard extends Component {
  render () {
    return (
      <SectionCentered>
        <div>
          <p>Dashboard</p>
        </div>
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
