import {
  GET_USER_INFO
} from './types'

function fetchedUserInfo (payload) {
  return {
    type: GET_USER_INFO,
    payload
  }
}

export function fetchUser () {
  return (dispatch) => {
    dispatch(fetchedUserInfo({id: 1, name: 'User 1'}))
  }
}
