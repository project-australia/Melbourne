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
        Fulano -  Profile
      </Modal.Header>
      <Modal.Content>
        <div className="uv-body">
          <div className="uv-group-info">
            <span className="uv-label">Name</span>
            <span className="uv-info">Jose da Silva</span>
          </div>
          <div className="uv-group-info">
            <span className="uv-label">School</span>
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
