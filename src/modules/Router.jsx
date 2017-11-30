import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/containers/Home'
import RestrictArea from './home/containers/RestrictArea'
import Login from './auth/containers/Login'
import ForgotPassword from './auth/containers/ForgotPassword'

import requireAuth from './shared/components/requireAuth'

import NoMatch from './shared/containers/NoMatch'

const Router = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/forgotPassword" component={ForgotPassword} />
    <Route exact path="/restricArea" component={requireAuth(RestrictArea)} />
    <Route component={NoMatch} />
  </Switch>
)

export default Router
