import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

const SectionCentered = (props) => {
  const classCss = props.class || ''
  return (
    <Grid fluid>
      <Row className={classCss}>
        <Col mdOffset={1} xs={12} md={10}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  )
}

export default SectionCentered
