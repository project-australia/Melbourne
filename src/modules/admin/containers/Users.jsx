import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionCentered from './../../shared/components/grid/SectionCentered'

class Users extends Component {
  render () {
    return (
      <SectionCentered>
        <div>
          <p>Header</p>
        </div>
        <div>
          <p>Filter</p>
        </div>
        <div>
          <p>Table</p>
        </div>
        <div>
          <p>Pagination</p>
        </div>
      </SectionCentered>
    )
  }
}

Users.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  }
}

export default connect(mapStateToProps)(Users)
