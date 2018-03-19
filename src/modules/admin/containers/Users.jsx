import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AccountIcon } from 'mdi-react'
import { connect } from 'react-redux'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import UsersFilter from './../components/UsersFilter'

class Users extends Component {
  render () {
    return (
      <SectionCentered>
        <div>
          <AccountIcon size={40} />
          <h1>Users</h1>
        </div>
        <UsersFilter />
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
