import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/containers/Home'
import RestrictedArea from './home/containers/RestrictedArea'
import Login from './auth/containers/Login'

import {
  home,
  login,
  restrictedArea,
  forgotPassword
} from './../config/utils/routes'

import ForgotPassword from './auth/containers/ForgotPassword'
import requireAuth from './shared/components/requireAuth'
import NoMatch from './shared/containers/NoMatch'

const Router = props => (
  <Switch>
    <Route exact path={home} component={Home} />
    <Route exact path={login} component={Login} />
    <Route exact path={forgotPassword} component={ForgotPassword} />
    <Route exact path={restrictedArea} component={requireAuth(RestrictedArea)} />
    <Route component={NoMatch} />
  </Switch>
)

export default Router
