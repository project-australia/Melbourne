import React from 'react'
import {
  Paper, Menu, MenuItem, Divider
} from 'material-ui'
import { Col } from 'react-flexbox-grid'

import CreateNewFolder from 'material-ui/svg-icons/file/create-new-folder'

import history from './../../../config/utils/historyRouter'
import { NOVEL } from './../../../config/utils/appRoutes'

import './../style/MenuLeft.css'

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
}

const SideMenu = props => {
  return (
    <Col xs={12} md={4} className='side-menu-box'>
      <Paper style={style}>
        <Menu desktop>
          <MenuItem
            primaryText="Novel"
            onClick={() => history.push(NOVEL)}
            leftIcon={<CreateNewFolder />}
          />
          <MenuItem
            primaryText="Destaque"
            leftIcon={<CreateNewFolder />}
          />
          <Divider />
          <MenuItem primaryText="Settings" disabled />
          <MenuItem primaryText="Sign out" disabled />
        </Menu>
      </Paper>
    </Col>
  )
}

export default SideMenu
