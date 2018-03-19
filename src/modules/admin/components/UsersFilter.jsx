import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import './style/UsersFilter.css'

class UsersFilter extends Component {
  state = {
    startDate: moment(),
    endDate: moment()
  }

  handleStartDate = date => this.setState({startDate: date})

  handleEndDate = date => this.setState({endDate: date})

  render () {
    return (
      <div className="us-wrapper">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleStartDate}
          className="input-date-picker"
        />
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleEndDate}
          className="input-date-picker"
        />
        <Input placeholder='Nº Order, Users emails, Payment Id ' />
        <Button content='focus' onClick={() => console.log('clicked')} />
      </div>
    )
  }
}

export default UsersFilter
