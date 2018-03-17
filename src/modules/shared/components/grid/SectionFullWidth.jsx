import React from 'react'
import { Grid } from 'semantic-ui-react'

const SectionFullWidth = (props) => {
  return (
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={16}>
        {props.children}
      </Grid.Column>
    </Grid>
  )
}

export default SectionFullWidth
