import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/containers/Home'

import AdminDashboard from './admin/containers/Dashboard'
import AdminUsers from './admin/containers/Users'
import AdminOrders from './admin/containers/Orders'
import AdminBooks from './admin/containers/Books'

import RestrictedArea from './home/containers/RestrictedArea'
import Login from './auth/containers/Login'

import {
  HOME,
  LOGIN,
  ADM_DASHBOARD,
  ADM_USERS,
  ADM_ORDERS,
  RESTRICTED_AREA,
  FORGOT_PASSWORD,
  ADM_BOOKS,
  NOT_AUTHORIZED
} from './../config/constants/appRoutes'

import ForgotPassword from './auth/containers/ForgotPassword'
import requireAuth from './shared/components/requireAuth'
import NoMatch from './shared/containers/NoMatch'
import NotAuthorized from './shared/containers/NotAuthorized'

const Router = props => (
  <Switch>
    <Route exact path={LOGIN} component={Login} />
    <Route exact path={HOME} component={Home} />

    <Route exact path={ADM_DASHBOARD} component={requireAuth(AdminDashboard)} />
    <Route path={ADM_USERS} component={requireAuth(AdminUsers)} />
    <Route path={ADM_ORDERS} component={requireAuth(AdminOrders)} />
    <Route path={ADM_BOOKS} component={requireAuth(AdminBooks)} />

    <Route exact path={FORGOT_PASSWORD} component={ForgotPassword} />
    <Route exact path={NOT_AUTHORIZED} component={NotAuthorized} />
    <Route exact path={RESTRICTED_AREA} component={requireAuth(RestrictedArea)} />
    <Route component={NoMatch} />
  </Switch>
)

export default Router
