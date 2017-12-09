import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from 'material-ui'

import { RESTRICTED_AREA } from './../../../config/utils/routes'

class FullBanner extends Component {
  state = {
    search: ''
  }

  handleChange = (event) => {
    console.log('change', event.target.value)
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    const { search } = this.state
    console.log('submit', search)
  }

  render () {
    const { search } = this.state

    return (
      <div>
        <h2>Search Book</h2>
        <TextField
          hintText='Search for books / ISBN / author / title'
          type='email'
          name='search'
          fullWidth
          value={search}
          onChange={this.handleChange}
        />
        <Link to={RESTRICTED_AREA}>Page 2</Link>
      </div>
    )
  }
}

export default FullBanner
