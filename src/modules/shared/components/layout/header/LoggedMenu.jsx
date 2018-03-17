import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'semantic-ui-react'

const LoggedMenu = props => (
  <Menu borderless={false} stackable size='large'>
    <Menu.Menu position='right'>
      <Menu.Item name='Sign-out' onClick={props.logoutFunc} />
    </Menu.Menu>
  </Menu>
)

LoggedMenu.propTypes = {
  logoutFunc: PropTypes.func.isRequired
}

export default LoggedMenu
