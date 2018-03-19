import React from 'react'
import { Input, Icon, Button } from 'semantic-ui-react'

import './style/UsersFilter.css'

const UsersFilter = () => (
  <div className="us-wrapper">
    <Input icon placeholder='Search...'>
      <input />
      <Icon name='search' />
    </Input>
    <Button content='focus' onClick={() => console.log('clicked')} />
  </div>
)

export default UsersFilter
