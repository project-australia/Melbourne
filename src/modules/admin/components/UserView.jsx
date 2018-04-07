import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'semantic-ui-react'

import './style/UserView.css'

const checkPropItem = (item) => {
  if (item && item.email) {
    return item
  }
  return {
    address: {},
    wallet: {}
  }
}
const clubName = (club) => {
  return club === 'TWENTY' ? 'ELITE CLUB' : 'NONE'
}
const UserView = props => {
  const item = checkPropItem(props.item)
  return (
    <Modal
      size='tiny'
      open={props.openModal}
      onClose={props.toggleModal}
      style={{marginTop: '5%', margin: '5% auto'}}
    >
      <Modal.Header>
        View User Profile
      </Modal.Header>
      <Modal.Content>
        <div className="uv-body">
          <div className="uv-group-info">
            <span className="uv-label">User Level</span>
            <span className="uv-info">{item.role}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Name</span>
            <span className="uv-info">{item.name}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Email</span>
            <span className="uv-info">{item.email}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">School</span>
            <span className="uv-info">{item.school}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Telephone</span>
            <span className="uv-info">{item.telephone}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Birthdate</span>
            <span className="uv-info">{item.birthDate}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Cub</span>
            <span className="uv-info">{clubName(item.club)}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">City</span>
            <span className="uv-info">{item.address.city}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">State</span>
            <span className="uv-info">{item.address.state}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Street</span>
            <span className="uv-info">{item.address.street}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Zipcode</span>
            <span className="uv-info">{item.address.zipCode}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Paypal account</span>
            <span className="uv-info">{item.wallet.paypalAccount}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Balance</span>
            <span className="uv-info">{item.wallet.balance}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Request Withdraw</span>
            <span className="uv-info">{item.wallet.status}</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Rep's email</span>
            <span className="uv-info">{item.referredBy}</span>
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

UserView.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
}

UserView.defaultProps = {
  item: {}
}

export default UserView
