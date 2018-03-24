import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllUsers, updateUser, findUserById, searchUsers } from './../../../services/backend/userService'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import CommonHeader from './../components/CommonHeader'
import UsersFilter from './../components/UsersFilter'
import UsersContent from '../components/UsersContent'

class Users extends Component {
  state = {
    usersList: []
  }

  componentDidMount () {
    this.getAllItems()
  }

  searchUsers = async searchParam => {
    const usersList = await searchUsers(searchParam)
    this.setState({usersList})
  }

  getAllItems = async () => {
    const users = await getAllUsers()
    this.setState({ usersList: users })
  }

  updateItem = async item => {
    await updateUser(item)
    this.getAllItems()
  }

  render () {
    const { usersList } = this.state
    return (
      <SectionCentered>
        <CommonHeader
          iconName="user"
          title="Users"
        />
        <UsersFilter
          searchFunction={this.searchUsers}
        />
        <UsersContent
          listItems={usersList}
          updateItem={this.updateItem}
          viewItem={findUserById}
        />
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
