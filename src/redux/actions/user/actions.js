import {
  USER_SET_PROFILE
} from './types'

const createAction = (type, payload) => ({ type, payload })

export function fetchUser () {
  return (dispatch) => {
    dispatch(createAction(USER_SET_PROFILE, {id: 1, name: 'User 1'}))
  }
}
