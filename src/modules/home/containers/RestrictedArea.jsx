import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { home } from './../../../config/utils/routes'

class RestrictedArea extends Component {
  render () {
    return (
      <div>
        Restrict Area - Only for authorized people<br /><br />
        <Link to={home}>Home</Link>
      </div>
    )
  }
}

export default RestrictedArea
