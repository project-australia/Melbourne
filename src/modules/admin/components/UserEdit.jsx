import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Input, Label } from 'semantic-ui-react'

import './style/UserEdit.css'

class UserEdit extends Component {
  render () {
    return (
      <Modal
        size='tiny'
        open={this.props.openModal}
        onClose={this.props.toggleModal}
        style={{marginTop: '5%', margin: '5% auto'}}
      >
        <Modal.Header>
          Fulano's profile
        </Modal.Header>
        <Modal.Content>
          <div className="ue-body">
            <div className="ue-item">
              <Label size="big">
                Name
              </Label>
              <Input fluid placeholder='User Level...' />
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
            onClick={this.props.toggleModal}/>
        </Modal.Actions>
      </Modal>
    )
  }
}

UserEdit.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired
}

export default UserEdit
