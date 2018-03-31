import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'semantic-ui-react'

import './style/BookView.css'

const checkPropItem = (item) => {
  if (item && item.id) {
    return item
  }
  return {
    title: '',
    authors: [],
    dimensions: {},
    images: {},
    prices: {}
  }
}
const checkFeatured = (featured) => {
  return featured ? 'YES' : 'NO'
}
const shortTitle = (title) => {
  return title.length > 50 ? `${title.slice(1, 49)}...` : title
}

const BookView = props => {
  const item = checkPropItem(props.item)
  return (
    <Modal
      size='large'
      open={props.openModal}
      onClose={props.toggleModal}
      style={{marginTop: '5%', margin: '5% auto'}}
    >
      <Modal.Header>
        Book - {item.title}
      </Modal.Header>
      <Modal.Content>
        <div className="bv-body">

          <div className="bv-container">
            <div className="bv-group-info">
              <span className="bv-label">Id</span>
              <span className="bv-info">{item.id}</span>
            </div>
            <div className="bv-group-info">
              <span className="bv-label">Title</span>
              <span className="bv-info">{shortTitle(item.title)}</span>
            </div>
            <div className="bv-group-info">
              <span className="bv-label">Authors</span>
              <span className="bv-info">{item.authors.map(author => author)}</span>
            </div>
            <div className="bv-group-info">
              <span className="bv-label">Condition</span>
              <span className="bv-info">{item.condition}</span>
            </div>
            <div className="bv-group-info">
              <span className="bv-label">Featured</span>
              <span className="bv-info">{checkFeatured(item.featured)}</span>
            </div>
            <div className="bv-group-info">
              <span className="bv-label">Edition</span>
              <span className="bv-info">{item.edition}</span>
            </div>
            <div className="bv-group-info">
              <span className="bv-label">Isbn</span>
              <span className="bv-info">{item.isbn}</span>
            </div>
            <div className="bv-group-info">
              <span className="bv-label">Description</span>
              <span className="bv-info">{item.about}</span>
            </div>
          </div>

          <div className="bv-container">
            <div className="bv-group-info">
              <span className="bv-label">Dimensions</span>
              <div className="bv-collum-items">
                <span className="bv-info">height: {item.dimensions.height}</span>
                <span className="bv-info">length: {item.dimensions.length}</span>
                <span className="bv-info">width: {item.dimensions.width}</span>
                <span className="bv-info">weight: {item.dimensions.weight}</span>
              </div>
            </div>
            <div className="bv-group-info">
              <span className="bv-label">Prices</span>
              <div className="bv-collum-items">
                <span className="bv-info">buy: ${item.prices.buy}</span>
                <span className="bv-info">rent: ${item.prices.rent}</span>
                <span className="bv-info">sell: ${item.prices.sell}</span>
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
          onClick={props.toggleModal}/>
      </Modal.Actions>
    </Modal>
  )
}

BookView.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
}

BookView.defaultProps = {
  item: {}
}

export default BookView

// authors:["james stewart", "jeffrey a. cole", "daniel drucker", "daniel anderson"]
// condition:"New"
// createdAt:"2018-03-24T15:55:15.579Z"
// dimensions:{height: 1.1, length: 9.9, width: 8, weight: 1.65}
// edition:"8"
// featured:true
// id:"5ab674e351588946632aac29"
// images:{small: "https://images-na.ssl-images-amazon.com/images/I/51BUXoQVslL._SL75_.jpg",…}
// isbn:"1305272420"
// prices:{sell: 26.02, buy: 25.2, rent: 10}
// status:"AVAILABLE"
// title:"student solutions manual for stewarts single variable calculus: early transcendentals, 8th (james stewart calculus)"
// updatedAt:"2018-03-24T22:10:09.030Z"
