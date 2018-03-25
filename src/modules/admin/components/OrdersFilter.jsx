import React, { Component } from 'react'
import { Input, Button, Icon, Label } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import './style/UsersFilter.css'

class OrdersFilter extends Component {
  state = {
    startDate: moment(),
    endDate: moment(),
    value: ''
  }

  handleStartDate = date => this.setState({startDate: date})

  handleEndDate = date => this.setState({endDate: date})

  render () {
    return (
      <div className="uf-wrapper">
        {/* <div className="uf-datepicker-box">
          <Label className="uf-label">
            <Icon name='calendar outline' /> Start Date
          </Label>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleStartDate}
            className="input-date-picker"
          />
        </div>
        <div className="uf-datepicker-box">
          <Label className="uf-label">
            <Icon name='calendar outline' /> End Date
          </Label>
          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleEndDate}
            className="input-date-picker"
          />
        </div> */}
        <div className="uf-input-box">
          <Input fluid placeholder='Order Number, Users email' />
        </div>
        <div className="uf-button-box">
          <Button content='SEARCH' onClick={() => console.log('clicked')} />
        </div>
      </div>
    )
  }
}

export default OrdersFilter
