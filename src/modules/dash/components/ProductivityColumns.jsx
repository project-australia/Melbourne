import React, { Component } from 'react'

import { ColumnClient } from './ColumnClient'
import { ColumnNote } from './ColumnNote'
import { ColumnTask } from './ColumnTask'
import { ColumnProject } from './ColumnProject'

import '../style/ProductivityColumns.css'

class ProductivityColumns extends Component {
  state = {
    novels: []
  }

  render () {
    return (
      <div className="pd-wrapper">
        <ColumnClient />
        <ColumnProject />
        <ColumnTask />
        <ColumnNote />
      </div>
    )
  }
}

export default ProductivityColumns
