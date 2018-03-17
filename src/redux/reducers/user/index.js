import {
  USER_SET_PROFILE
} from './../../types/UserTypes'

import * as user from './reducers'

const INITIAL_STATE = {
  user: {}
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case USER_SET_PROFILE:
      return user.setUser(state, action)
    default:
      return state
  }
}
