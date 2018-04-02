import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'semantic-ui-react'
import moment from 'moment'

import './style/OrderView.css'

class OrderView extends Component {
  state = {
    item: {
      user: [{}],
      shippingAddress: {},
      items: []
    },
    books: []
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.item && nextProps.item.orderType) {
      this.setState({ item: nextProps.item })
      this.getBooksRelatedToOrder(nextProps.item.items)
    }
  }

  getBooksRelatedToOrder = async (BooksIds) => {
    const books = await this.props.getBooksInOrder(BooksIds)
    this.setState({ books })
  }

  render () {
    const { item } = this.state
    console.log('ORDER', item)
    return (
      <Modal
        size='large'
        open={this.props.openModal}
        onClose={this.props.toggleModal}
        style={{marginTop: '5%', margin: '5% auto'}}
      >
        <Modal.Header>
          Edit Order
        </Modal.Header>
        <Modal.Content>
          <div className="ov-body">

            <div className="ov-container">

              <div className="ov-group-info">
                <span className="ov-label">Date Created</span>
                <span className="ov-info">{moment(item.createdAt).format('MMMM Do YYYY')}</span>
              </div>

              <div className="ov-group-info">
                <span className="ov-label">Order Type</span>
                <span className="ov-info">{item.orderType}</span>
              </div>

              <div className="ov-group-info">
                <span className="ov-label">Shipping Method</span>
                <span className="ov-info">{item.shippingMethod}</span>
              </div>

              <div className="ov-group-info" style={{ paddingBottom: 40 }}>
                <span className="ov-label">Customer's Information</span>
                <div className="ov-group-item-column">
                  <span className="ov-info">Name: {item.user[0].name}</span>
                  <span className="ov-info">Email: {item.user[0].email}</span>
                  <span className="ov-info">Telephone: {item.user[0].telephone}</span>
                </div>
              </div>

              <div className="ov-group-info">
                <span className="ov-label">Order Status</span>
                <span className="ov-info">{item.status}</span>
              </div>

              <div className="ov-group-info">
                <span className="ov-label">Transaction Id</span>
                <span className="ov-info">{item.transactionId || 'Payment In Person'}</span>
              </div>

              <div className="ov-group-info" style={{ paddingBottom: 70 }}>
                <span className="ov-label">Shipping Address</span>
                <div className="ov-group-item-column">
                  <span className="ov-info">{item.shippingAddress.street}</span>
                  <span className="ov-info">{item.shippingAddress.city}</span>
                  <span className="ov-info">{item.shippingAddress.state}</span>
                  <span className="ov-info">{item.shippingAddress.zipCode}</span>
                </div>
              </div>

            </div>

            <div className="ov-container">
              <span className="ov-label">Items</span>
              <div className="ov-group-info">
                <div className="ov-group-item-column">
                  {this.state.books.length > 0 && this.state.books.map(item => {
                    return <div key={item.id} className="ov-group-item-column">
                      <span className="ov-info">{item.title}</span>
                      <span className="ov-info">ISBN: {item.isbn}</span>
                      <span className="ov-info">Condition: {item.condition}</span>
                      <span className="ov-info">Sell: $ {item.prices.sell}</span>
                      <span className="ov-info">Buy: $ {item.prices.buy || '-'}</span>
                      <span className="ov-info">Rent: $ {item.prices.rent || '-'}</span>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Ok'
            onClick={this.props.toggleModal}/>
        </Modal.Actions>
      </Modal>
    )
  }
}

OrderView.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
}

OrderView.defaultProps = {
  item: {}
}

export default OrderView
