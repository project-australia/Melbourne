import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

const SectionCentered = (props) => {
  return (
    <Grid fluid>
      <Row>
        <Col mdOffset={1} xs={12} md={10}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  )
}

export default SectionCentered
