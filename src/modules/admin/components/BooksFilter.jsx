import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'semantic-ui-react'

import './style/UsersFilter.css'

class BooksFilter extends Component {
  state = {
    value: ''
  }

  handleInputChange = event => this.setState({ value: event.target.value })

  render () {
    return (
      <div className="uf-wrapper">
        <div className="uf-input-box">
          <Input
            value={this.state.value}
            onChange={event => this.handleInputChange(event)}
            fluid
            placeholder="Name, Email or School"
          />
        </div>
        <div className="uf-button-box">
          <Button
            content='SEARCH'
            onClick={() => this.props.searchFunction(this.state.value)}
          />
        </div>
      </div>
    )
  }
}

BooksFilter.propTypes = {
  searchFunction: PropTypes.func.isRequired
}

export default BooksFilter
