import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Input, Dropdown } from 'semantic-ui-react'

import './style/UserEdit.css'

class UserEdit extends Component {
  state = {
    role: '',
    name: '',
    email: '',
    birthDate: '',
    telephone: '',
    school: '',
    ballance: '',
    paypalAccount: '',
    requestStatus: '',
    state: '',
    city: '',
    zipCode: '',
    street: '',
    referredBy: ''
  }
  handleRoleChange = (e, { value }) => this.setState({ role: value })
  handleClubChange = (e, { value }) => this.setState({ clue: value })
  handleRequestStatusChange = (e, { value }) => this.setState({ requestStatus: value })
  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })
  walletStatusOptions = () => [
    { key: 'NONE', value: 'NONE', text: 'NONE' },
    { key: 'PENDING', value: 'PENDING', text: 'PENDING' }
  ]
  clubOptions = () => [
    { key: 'NONE', value: 'NONE', text: 'NONE' },
    { key: 'TWENTY', value: 'TWENTY', text: 'ELITE CLUB' }
  ]
  roleOptions = () => [
    { key: 'ADMIN', value: 'ADMIN', text: 'ADMIN' },
    { key: 'REP', value: 'REP', text: 'REP' },
    { key: 'USER', value: 'USER', text: 'USER' }
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
          Fulano's profile
        </Modal.Header>
        <Modal.Content>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Role
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Role"
                  onChange={this.handleRoleChange}
                  selection
                  value={this.state.role}
                  options={this.roleOptions()} />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Name
              </span>
              <span className="ue-info">
                <Input
                  name='name'
                  disabled
                  fluid
                  placeholder='Name' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Email
              </span>
              <span className="ue-info">
                <Input
                  name='email'
                  disabled
                  fluid
                  placeholder='Email' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Birthdate
              </span>
              <span className="ue-info">
                <Input
                  name='birthDate'
                  disabled
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.birthDate}
                  placeholder='Birthdate' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Telephone
              </span>
              <span className="ue-info">
                <Input
                  name='telephone'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.telephone}
                  placeholder='Telephone' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Club
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Club"
                  onChange={this.handleClubChange}
                  selection
                  value={this.state.club}
                  options={this.clubOptions()} />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                 Wallet Ballance
              </span>
              <span className="ue-info">
                <Input
                  name='ballance'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.ballance}
                  placeholder='Wallet Ballance' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Paypal Account
              </span>
              <span className="ue-info">
                <Input
                  name='paypalAccount'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.paypalAccount}
                  placeholder='Paypal Account' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Request Status
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Request Status"
                  onChange={this.handleRequestStatusChange}
                  selection
                  value={this.state.requestStatus}
                  options={this.walletStatusOptions()} />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Street
              </span>
              <span className="ue-info">
                <Input
                  name='street'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.street}
                  placeholder='Street' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                City
              </span>
              <span className="ue-info">
                <Input
                  name='city'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.city}
                  placeholder='City' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                State
              </span>
              <span className="ue-info">
                <Input
                  name='state'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.state}
                  placeholder='State' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Zipcode
              </span>
              <span className="ue-info">
                <Input
                  name='zipCode'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.zipCode}
                  placeholder='ZipCode' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Rep's email
              </span>
              <span className="ue-info">
                <Input
                  name='referredBy'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.referredBy}
                  placeholder="Rep's email" />
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
