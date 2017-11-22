import {
  GET_USER_LOCAL_STORAGE,
  GET_USER_INFO
} from './../../actions/user/types'
import * as user from './reducers'

const INITIAL_STATE = {
  user: {},
  info: 'Init Mapping'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_LOCAL_STORAGE:
      return user.setUser(state, action)
    case GET_USER_INFO:
      return user.setUser(state, action)
    default:
      return state
  }
}
