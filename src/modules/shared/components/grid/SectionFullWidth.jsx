import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

const SectionFullWidth = (props) => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} md={12}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  )
}

export default SectionFullWidth
