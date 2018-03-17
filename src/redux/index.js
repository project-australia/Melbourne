import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import UserReducer from './reducers/user/'
import AuthReducer from './reducers/auth/'

const rootReducer = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  toastr: toastrReducer
})

export default rootReducer
