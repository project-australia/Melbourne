import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { HOME } from './../../../config/constants/appRoutes'

class RestrictedArea extends Component {
  render () {
    return (
      <div>
        Restrict Area - Only for authorized people<br /><br />
        <Link to={HOME}>HOME</Link>
      </div>
    )
  }
}

export default RestrictedArea
