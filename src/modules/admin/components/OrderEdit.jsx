import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Input, Dropdown } from 'semantic-ui-react'
import moment from 'moment'

import './style/OrderEdit.css'

class OrderEdit extends Component {
  state = {
    _id: '',
    createdAt: '',
    orderType: '',
    user: [{}],
    items: [],
    status: '',
    shippingAddress: {},
    shippingMethod: '',
    books: []
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.item && nextProps.item.orderType) {
      this.fillInputs(nextProps.item)
      this.getBooks(nextProps.item.items)
    }
  }

  getBooks = async (BooksIds) => {
    const books = await this.props.getBooksInOrder(BooksIds)
    console.log('books', books)
    this.setState({ books })
  }

  fillInputs = (item) => {
    this.setState({
      _id: item._id,
      createdAt: item.createdAt,
      orderType: item.orderType,
      shippingMethod: item.shippingMethod,
      user: item.user,
      shippingAddress: item.shippingAddress,
      transactionId: item.transactionId || ' - ',
      status: item.status
    })
  }

  updateItem = () => {
    this.props.updateFunction(this.state)
    this.props.toggleModal()
  }

  handleStatusChange = (e, { value }) => this.setState({ status: value })

  handleBookInputChange = (e, index) => {
    const {name, value} = e.target
    const booksCopy = Object.assign({}, this.state.books)
    booksCopy[index].prices[name] = value
    this.setState({ booksCopy })
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })

  orderStatusOptions = () => [
    { key: 'WAITING_PAYMENT', value: 'WAITING_PAYMENT', text: 'WAITING_PAYMENT' },
    { key: 'PAYMENT_CONFIRMED', value: 'PAYMENT_CONFIRMED', text: 'PAYMENT_CONFIRMED' },
    { key: 'CANCELLED', value: 'CANCELLED', text: 'CANCELLED' },
    { key: 'RECEIVED', value: 'RECEIVED', text: 'RECEIVED' },
    { key: 'SHIPPED', value: 'SHIPPED', text: 'SHIPPED' }
  ]

  conditionOptions = () => [
    { key: 'Used – Acceptable', value: 'Used – Acceptable', text: 'Used – Acceptable' },
    { key: 'Used – Good', value: 'Used – Good', text: 'Used – Good' },
    { key: 'Used – Very Good', value: 'Used – Very Good', text: 'Used – Very Good' },
    { key: 'Used – Like New', value: 'Used – Like New', text: 'Used – Like New' },
    { key: 'New', value: 'New', text: 'New' }
  ]

  render () {
    const { _id, createdAt, orderType, shippingMethod, user, transactionId, shippingAddress } = this.state
    return (
      <Modal
        size='large'
        open={this.props.openModal}
        onClose={this.props.toggleModal}
        style={{marginTop: '5%', margin: '5% auto'}}
      >
        <Modal.Header>
          Edit Order - Nº {_id}
        </Modal.Header>
        <Modal.Content>
          <div className="oe-body">

            <div className="ov-container">

              <div className="oe-item">
                <span className="oe-label">
                  Date Created
                </span>
                <span className="oe-info">
                  <Input
                    name='createdAt'
                    value={moment(createdAt).format('MMMM Do YYYY')}
                    disabled
                    fluid />
                </span>
              </div>

              <div className="oe-item">
                <span className="oe-label">
                  Order Type
                </span>
                <span className="oe-info">
                  <Input
                    name='orderType'
                    value={orderType}
                    disabled
                    fluid />
                </span>
              </div>

              <div className="oe-item">
                <span className="oe-label">
                  Order Status
                </span>
                <span className="oe-info">
                  <Dropdown
                    placeholder="Select Order Status"
                    onChange={this.handleStatusChange}
                    selection
                    value={this.state.status}
                    options={this.orderStatusOptions()} />
                </span>
              </div>

              <div className="oe-item">
                <span className="oe-label">
                Shipping Method
                </span>
                <span className="oe-info">
                  <Input
                    name='shippingMethod'
                    value={shippingMethod}
                    disabled
                    fluid />
                </span>
              </div>

              <div className="oe-item">
                <span className="oe-label">
                Transaction Id
                </span>
                <span className="oe-info">
                  <Input
                    name='transactionId'
                    value={transactionId}
                    disabled
                    fluid />
                </span>
              </div>

              <div className="oe-group-info" style={{ paddingBottom: 40 }}>
                <span className="ov-label">Customer's Information</span>
                <div className="ov-group-item-column">
                  <span className="ov-info">Name: {user[0].name}</span>
                  <span className="ov-info">Email: {user[0].email}</span>
                  <span className="ov-info">Telephone: {user[0].telephone}</span>
                </div>
              </div>

              <div className="oe-group-info" style={{ paddingBottom: 70 }}>
                <span className="ov-label">Shipping Address</span>
                <div className="ov-group-item-column">
                  <span className="ov-info">{shippingAddress.street}</span>
                  <span className="ov-info">{shippingAddress.city}</span>
                  <span className="ov-info">{shippingAddress.state}</span>
                  <span className="ov-info">{shippingAddress.zipCode}</span>
                </div>
              </div>

            </div>

            <div className="ov-container">

              <div className="oe-books">
                <h3>
                  Books
                </h3>
                {(this.state.books.length > 0 && this.state.orderType === 'SELL') && this.state.books.map((book, index) => {
                  return (
                    <div key={book.id} className="oe-book-container">
                      <span className="ov-info">id: {book.id}</span>
                      <span className="ov-info">Title: {book.title}</span>
                      <span className="ov-info">ISBN: {book.isbn}</span>
                      <div style={{ marginBottom: 10 }}>
                        <span style={{ marginRight: 10 }}>Condition</span>
                        <Dropdown
                          placeholder="Select Order Status"
                          onChange={this.handleStatusChange}
                          selection
                          value={book.condition}
                          options={this.conditionOptions()} />
                      </div>
                      <div className="oe-prices">
                        <div className="oe-price-item">
                          <span className="oe-label">Sell</span>
                          <span className="oe-info">
                            <Input
                              name='sell'
                              type='number'
                              required
                              onChange={(event) => this.handleBookInputChange(event, index)}
                              value={book.prices.sell}
                              fluid />
                          </span>
                        </div>
                        <div className="oe-price-item">
                          <span className="oe-label">Buy</span>
                          <span className="oe-info">
                            <Input
                              name='buy'
                              type='number'
                              onChange={(event) => this.handleBookInputChange(event, index)}
                              value={book.prices.buy}
                              fluid
                              required
                            />
                          </span>
                        </div>
                        <div className="oe-price-item">
                          <span className="oe-label">Rent</span>
                          <span className="oe-info">
                            <Input
                              required
                              name='rent'
                              type='number'
                              onChange={(event) => this.handleBookInputChange(event, index)}
                              value={book.prices.rent}
                              fluid />
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {(this.state.books.length > 0 && this.state.orderType !== 'SELL') && this.state.books.map(book => {
                  return <div className="oe-group-info" style={{ paddingBottom: 15 }}>
                    <div className="ov-group-item-column">
                      <span className="ov-info">Title: {book.title}</span>
                      <span className="ov-info">ISBN: {book.isbn}</span>
                      <span className="ov-info">Condition: {book.condition}</span>
                      <span className="ov-info">Sell $: {book.prices.sell}</span>
                      <span className="ov-info">Buy $: {book.prices.buy}</span>
                      <span className="ov-info">Rent $: {book.prices.rent}</span>
                    </div>
                  </div>
                })}
              </div>

            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          {this.state.orderType === 'SELL' && <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Confirm Sell Order'
            onClick={() => this.updateItem()}/>}

          <Button onClick={this.props.toggleModal} negative content="Cancel" />

          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Save'
            onClick={() => this.updateItem()}/>

        </Modal.Actions>
      </Modal>
    )
  }
}

OrderEdit.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
}

OrderEdit.defaultProps = {
  item: {}
}

export default OrderEdit
