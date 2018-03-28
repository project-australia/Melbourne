import React from 'react'

import { Menu } from 'semantic-ui-react'

import history from '../../../../../config/historyRouter'
import { LOGIN } from '../../../../../config/constants/appRoutes'

const navigate = (route) => { history.push(route) }

const DefaultMenu = props => (
  <Menu borderless={false} stackable size='large'>
    <Menu.Menu position='right'>
      <Menu.Item name='Login' onClick={() => navigate(LOGIN)} />
    </Menu.Menu>
  </Menu>
)

export default DefaultMenu
