import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker'
import moment from 'moment'

import './style/UsersFilter.css'

class OrdersFilter extends Component {
  state = {
    startDate: moment(),
    endDate: moment(),
    value: ''
  }
  handleInput = evt => this.setState({ value: evt.target.value })
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
          <Input fluid placeholder='Order Number' name='value' onChange={this.handleInput}/>
        </div>
        <div className="uf-button-box">
          <Button content='SEARCH' onClick={() => this.props.searchFunction(this.state.value)} />
        </div>
      </div>
    )
  }
}

export default OrdersFilter
