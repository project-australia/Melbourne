import {
  GET_USER_INFO
} from './types'

const createAction = (type, payload) => ({ type, payload })

export function fetchUser () {
  return (dispatch) => {
    dispatch(createAction(GET_USER_INFO, {id: 1, name: 'User 1'}))
  }
}
