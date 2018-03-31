import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Input, Dropdown } from 'semantic-ui-react'

import './style/UserEdit.css'

class BookEdit extends Component {
  state = {
    id: '',
    status: '',
    about: '',
    priceBuy: '',
    priceSell: '',
    priceRent: '',
    condition: '',
    featured: '',
    title: '', // not editable
    authors: [],
    edition: '',
    dimensions: {},
    isbn: ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.item && nextProps.item.id) {
      console.log('item', nextProps.item)
      this.fillInputs(nextProps.item)
    }
  }

  fillInputs = (item) => {
    this.setState({
      id: item.id,
      status: item.status,
      about: item.about || '',
      priceBuy: item.prices.buy || '',
      priceSell: item.prices.sell,
      priceRent: item.prices.rent || '',
      condition: item.condition,
      featured: item.featured ? 'true' : 'false',
      title: item.title, // not editable
      authors: item.authors,
      edition: item.edition || '',
      dimensions: item.dimensions || '',
      isbn: item.isbn
    })
  }

  updateItem = () => {
    this.props.updateFunction(this.state)
    this.props.toggleModal()
  }

  handleFeaturedChange = (e, { value }) => this.setState({ featured: value })
  handleStatusChange = (e, { value }) => this.setState({ status: value })
  handleConditionChange = (e, { value }) => this.setState({ condition: value })
  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })

  featuredOptions = () => [
    { key: 'false', value: 'false', text: 'NO' },
    { key: 'true', value: 'true', text: 'YES' }
  ]

  statusOptions = () => [
    { key: 'RENTED', value: 'RENTED', text: 'RENTED' },
    { key: 'AVAILABLE', value: 'AVAILABLE', text: 'AVAILABLE' },
    { key: 'SOLD', value: 'SOLD', text: 'SOLD' },
    { key: 'UNAVAILABLE', value: 'UNAVAILABLE', text: 'UNAVAILABLE' }
  ]

  conditionOptions = () => [
    { key: 'Used – Acceptable', value: 'Used – Acceptable', text: 'Used – Acceptable' },
    { key: 'Used – Good', value: 'Used – Good', text: 'Used – Good' },
    { key: 'Used – Very Good', value: 'Used – Very Good', text: 'Used – Very Good' },
    { key: 'Used – Like New', value: 'Used – Like New', text: 'Used – Like New' },
    { key: 'New', value: 'New', text: 'New' }
  ]

  render () {
    return (
      <Modal
        size='tiny'
        open={this.props.openModal}
        onClose={this.props.toggleModal}
        style={{marginTop: '5%', margin: '5% auto'}}
      >
        <Modal.Header>
          Edit Book
        </Modal.Header>
        <Modal.Content>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Status
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Status"
                  onChange={this.handleStatusChange}
                  value={this.state.status}
                  selection
                  options={this.statusOptions()} />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Description
              </span>
              <span className="ue-info">
                <Input
                  name='about'
                  onChange={this.handleInputChange}
                  value={this.state.about}
                  fluid
                  placeholder='Description' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Price: Buy
              </span>
              <span className="ue-info">
                <Input
                  name='priceBuy'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.priceBuy}
                  placeholder='Buy Pricing' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Price: Sell
              </span>
              <span className="ue-info">
                <Input
                  name='priceSell'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.priceSell}
                  placeholder='Sell Pricing' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Price: Rent
              </span>
              <span className="ue-info">
                <Input
                  name='priceRent'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.priceRent}
                  placeholder='Rent Pricing' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
              Condition
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Condition"
                  onChange={this.handleConditionChange}
                  selection
                  value={this.state.condition}
                  options={this.conditionOptions()} />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Featured
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Featured"
                  onChange={this.handleFeaturedChange}
                  selection
                  value={this.state.featured}
                  options={this.featuredOptions()} />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
              Title
              </span>
              <span className="ue-info">
                <Input
                  name='title'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.title}
                  disabled
                  placeholder='title' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
              Authors
              </span>
              <span className="ue-info">
                {this.state.authors.map(author => {
                  return <Input
                    key={author}
                    fluid
                    value={author
                    }
                    disabled />
                })}
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                ISBN
              </span>
              <span className="ue-info">
                <Input
                  name='isbn'
                  onChange={this.handleInputChange}
                  fluid
                  disabled
                  value={this.state.isbn}
                  placeholder='Isbn' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
               Edition
              </span>
              <span className="ue-info">
                <Input
                  name='edition'
                  onChange={this.handleInputChange}
                  fluid
                  disabled
                  value={this.state.edition}
                  placeholder='Edition' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Dimensions
              </span>
              <span className="ue-info">
                <Input
                  disabled
                  fluid
                  value={this.state.dimensions.height} />
                <Input
                  disabled
                  fluid
                  value={this.state.dimensions.length} />
                <Input
                  disabled
                  fluid
                  value={this.state.dimensions.width} />
                <Input
                  disabled
                  fluid
                  value={this.state.dimensions.weight} />
              </span>
            </div>
          </div>

        </Modal.Content>
        <Modal.Actions>
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

BookEdit.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
}

BookEdit.defaultProps = {
  item: {}
}

export default BookEdit
