import {
  AUTH_LOGGED_STATUS,
  AUTH_RESET_PASSWORD
} from './../../types/AuthTypes'
import * as auth from './reducers'

const INITIAL_STATE = {
  logged: false,
  resetPassword: false
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case AUTH_LOGGED_STATUS:
      return auth.setLoggedStatus(state, action)
    case AUTH_RESET_PASSWORD:
      return auth.setResetPassword(state, action)
    default:
      return state
  }
}
