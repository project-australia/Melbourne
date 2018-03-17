import React from 'react'

import { Menu } from 'semantic-ui-react'

const DefaultMenu = props => (
  <Menu.Menu position='right'>
    <Menu.Item name='Sign-up' onClick={() => alert('sign in')} />
    <Menu.Item name='Login-in' onClick={() => alert('login')} />
  </Menu.Menu>
)

export default DefaultMenu
