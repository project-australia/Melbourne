import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Pagination, Menu, Button, Icon } from 'semantic-ui-react'
import moment from 'moment'

import OrderView from './OrderView'
import OrderEdit from './OrderEdit'

import './style/UsersContent.css'

class OrdersContent extends Component {
  state = {
    boundaryRange: 0,
    siblingRange: 2,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: false,
    openModal: false,
    orderViewModal: false,
    orderEditModal: false,
    order: {}
  }

  handlePaginationChange = (e, { activePage }) => {
    this.props.changePage(activePage)
  }

  toggleModal = (order) => this.setState((state, props) => ({ openModal: !state.openModal, order }))
  toggleOrderViewModal = (order) => this.setState((state, props) => ({ orderViewModal: !state.orderViewModal, order }))
  toggleOrderEditModal = (order) => this.setState((state, props) => ({ orderEditModal: !state.orderEditModal, order }))

  render () {
    const {
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      orderViewModal,
      orderEditModal
    } = this.state
    const { orders, activePage, totalPages } = this.props.listItems
    return (
      <div className="uc-wrapper">

        <OrderView
          openModal={orderViewModal}
          toggleModal={this.toggleOrderViewModal}
          item={this.state.order}
          getBooksInOrder={this.props.getBooksInOrder}
        />
        <OrderEdit
          openModal={orderEditModal}
          toggleModal={this.toggleOrderEditModal}
          updateFunction={this.props.updateItem}
          item={this.state.order}
          getBooksInOrder={this.props.getBooksInOrder}
          confirmSellOrder={this.props.confirmSellOrder}
        />
        <div className="uc-table">
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Order Number</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>PayPal Transaction Id</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Order Price</Table.HeaderCell>
                <Table.HeaderCell>User</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {orders.map(order => {
                return (
                  <Table.Row key={order.id}>
                    <Table.Cell>{order.id}</Table.Cell>
                    <Table.Cell>{moment(order.createdAt).format('MMM Do YY, h:mm:ss a')}</Table.Cell>
                    <Table.Cell>{order.orderType}</Table.Cell>
                    <Table.Cell>{order.transactionId}</Table.Cell>
                    <Table.Cell>{order.status}</Table.Cell>
                    <Table.Cell> - </Table.Cell>
                    <Table.Cell>{order.user.email}</Table.Cell>
                    <Table.Cell>
                      <div className="uc-actions">
                        <Button onClick={() => this.toggleOrderEditModal(order)} icon>
                          <Icon name='pencil' />
                        </Button>
                        <Button onClick={() => this.toggleOrderViewModal(order)} icon>
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
                <Table.HeaderCell colSpan='8'>
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

OrdersContent.propTypess = {
  listItems: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired,
  viewItem: PropTypes.func.isRequired
}

export default OrdersContent
