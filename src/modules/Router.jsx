import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from './home/containers/Home'

import requireAuth from './shared/components/requireAuth'
import NoMatch from './shared/containers/NoMatch'

const Router = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NoMatch} />
  </Switch>
)

export default Router
