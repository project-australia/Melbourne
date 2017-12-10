import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import SectionFullWidth from './../../shared/components/grid/SectionFullWidth'

import { HOME } from './../../../config/utils/routes'

class RestrictedArea extends Component {
  render () {
    return (
      <SectionFullWidth>
        <Row>
          <Col xs={12} md={12}>
            <h1>Section 2</h1>
            <Link to={HOME}> HOME </Link>
          </Col>
        </Row>
        <SectionCentered>
          <Row>
            <Col xs={12} md={12}>
              <h1>Section 1</h1>
            </Col>
          </Row>
        </SectionCentered>
      </SectionFullWidth>
    )
  }
}

export default RestrictedArea
