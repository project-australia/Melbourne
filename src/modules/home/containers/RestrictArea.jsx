import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RestrictArea extends Component {
  render () {
    return (
      <div>
        Restrict Area - Only for authorized people<br /><br />
        <Link className="btn btn-default" to="/">Home</Link>
      </div>
    )
  }
}

export default RestrictArea
