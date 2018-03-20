import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'semantic-ui-react'

const ConfirmationModal = props => {
  return (
    <Modal size='mini' open={props.openModal} onClose={props.toggleModal}>
      <Modal.Header>
        {props.title}
      </Modal.Header>
      <Modal.Content>
        <p>{props.content}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={props.toggleModal} negative>
          No
        </Button>
        <Button positive icon='checkmark' labelPosition='right' content='Yes' />
      </Modal.Actions>
    </Modal>
  )
}

ConfirmationModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default ConfirmationModal
