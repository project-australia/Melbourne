import React from 'react'

import { Menu } from 'semantic-ui-react'

import history from '../../../../../config/historyRouter'

import {
  ADM_DASHBOARD,
  ADM_ORDERS,
  ADM_BOOKS,
  ADM_USERS
} from '../../../../../config/constants/appRoutes'

const navigate = (route) => { history.push(route) }

const AdminMenu = props => (
  <Menu borderless={false} stackable size='large'>
    <Menu.Menu position='left'>
      <Menu.Item>
        <h2>Menu for Admin users</h2>
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position='right'>
      <Menu.Item name='Dashboard' onClick={() => navigate(ADM_DASHBOARD)} />
      <Menu.Item name='Orders' onClick={() => navigate(ADM_ORDERS)} />
      <Menu.Item name='Books' onClick={() => navigate(ADM_BOOKS)} />
      <Menu.Item name='Users' onClick={() => navigate(ADM_USERS)} />
    </Menu.Menu>
  </Menu>
)

export default AdminMenu
