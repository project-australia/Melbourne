import { actions as toastrActions } from 'react-redux-toastr'

// success info warning light error confirm message, remove

export function handleMessage (type, title, message) {
  return (dispatch) => {
    dispatch([
      toastrActions.add({
        type,
        title,
        message,
        timeout: 4000
      })
    ])
  }
}
