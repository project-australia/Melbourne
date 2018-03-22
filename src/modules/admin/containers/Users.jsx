import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllUsers } from './../../../services/backend/userService'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import CommonHeader from './../components/CommonHeader'
import UsersFilter from './../components/UsersFilter'
import UsersContent from '../components/UsersContent'

class Users extends Component {
  componentDidMount () {
    getAllUsers().then(res => console.log('res', res))
  }
  searchUsers = searchParam => console.log('search users', searchParam)
  render () {
    return (
      <SectionCentered>
        <CommonHeader
          iconName="user"
          title="Users"
        />
        <UsersFilter
          searchFunction={this.searchUsers}
        />
        <UsersContent />
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
