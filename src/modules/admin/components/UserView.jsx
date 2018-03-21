import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'semantic-ui-react'

import './style/UserView.css'

const UserView = props => {
  return (
    <Modal
      size='tiny'
      open={props.openModal}
      onClose={props.toggleModal}
      style={{marginTop: '10%', margin: '10% auto'}}
    >
      <Modal.Header>
        Fulano's profile
      </Modal.Header>
      <Modal.Content>
        <div className="uv-body">
          <div className="uv-group-info">
            <span className="uv-label">User Level</span>
            <span className="uv-info">ADMIN</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Name</span>
            <span className="uv-info">Jose da Silva</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Email</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">School</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Telephone</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Birthdate</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Cub</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">City</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">State</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Street</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Zipcode</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Paypal account</span>
            <span className="uv-info">Faesa</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">Wallet</span>
            <span className="uv-info">Faesa</span>
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
  openModal: PropTypes.bool.isRequired
}

export default UserView
