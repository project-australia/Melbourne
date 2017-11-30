import {
  AUTH_LOGGED_STATUS,
  AUTH_USER_CREDENTIALS,
  AUTH_RESET_PASSWORD
} from './../../actions/auth/types'
import * as auth from './reducers'

const INITIAL_STATE = {
  logged: false,
  credentials: {},
  resetPassword: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGGED_STATUS:
      return auth.setLoggedStatus(state, action)
    case AUTH_USER_CREDENTIALS:
      return auth.setUserCredentials(state, action)
    case AUTH_RESET_PASSWORD:
      return auth.setResetPassword(state, action)
    default:
      return state
  }
}
