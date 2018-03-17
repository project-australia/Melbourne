import React from 'react'
import { Grid } from 'semantic-ui-react'

const SectionCentered = (props) => {
  return (
    <Grid centered columns={1}>
      <Grid.Column mobile={16} tablet={14} computer={14}>
        {props.children}
      </Grid.Column>
    </Grid>
  )
}

export default SectionCentered
