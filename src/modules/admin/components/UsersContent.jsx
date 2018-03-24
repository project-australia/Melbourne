import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Pagination, Menu, Button, Icon } from 'semantic-ui-react'

import UserView from './UserView'
import UserEdit from './UserEdit'

import './style/UsersContent.css'

class UsersContent extends Component {
  state = {
    activePage: 5,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 50,
    openModal: false,
    userViewModal: false,
    userEditModal: false,
    user: {}
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  toggleModal = (user) => this.setState((state, props) => ({ openModal: !state.openModal, user }))
  toggleUserViewModal = (user) => this.setState((state, props) => ({ userViewModal: !state.userViewModal, user }))
  toggleUserEditModal = (user) => this.setState((state, props) => ({ userEditModal: !state.userEditModal, user }))
  clubName = (club) => {
    return club === 'TWENTY' ? 'ELITE CLUB' : club
  }
  render () {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages,
      userViewModal,
      userEditModal
    } = this.state
    const { listItems } = this.props
    return (
      <div className="uc-wrapper">

        <UserView
          openModal={userViewModal}
          toggleModal={this.toggleUserViewModal}
          item={this.state.user}
        />
        <UserEdit
          openModal={userEditModal}
          toggleModal={this.toggleUserEditModal}
          updateFunction={this.props.updateItem}
          item={this.state.user}
        />
        <div className="uc-table">
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Telephone</Table.HeaderCell>
                <Table.HeaderCell>Club</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {listItems.map(user => {
                return (
                  <Table.Row key={user.id}>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.telephone}</Table.Cell>
                    <Table.Cell>{this.clubName(user.club)}</Table.Cell>
                    <Table.Cell>
                      <div className="uc-actions">
                        <Button onClick={() => this.toggleUserEditModal(user)} icon>
                          <Icon name='pencil' />
                        </Button>
                        <Button onClick={() => this.toggleUserViewModal(user)} icon>
                          <Icon name='eye' />
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='5'>
                  <Menu floated='right' pagination>
                    <Pagination
                      className="uc-pagination"
                      activePage={activePage}
                      boundaryRange={boundaryRange}
                      onPageChange={this.handlePaginationChange}
                      size='mini'
                      siblingRange={siblingRange}
                      totalPages={totalPages}
                      ellipsisItem={showEllipsis ? undefined : null}
                      firstItem={showFirstAndLastNav ? undefined : null}
                      lastItem={showFirstAndLastNav ? undefined : null}
                      prevItem={showPreviousAndNextNav ? undefined : null}
                      nextItem={showPreviousAndNextNav ? undefined : null}
                    />
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </div>
    )
  }
}

UsersContent.propTypess = {
  listItems: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
  viewItem: PropTypes.func.isRequired
}

export default UsersContent
