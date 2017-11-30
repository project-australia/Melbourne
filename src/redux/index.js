import { combineReducers } from 'redux'

import UserReducer from './reducers/user/'
import AuthReducer from './reducers/auth/'

const rootReducer = combineReducers({
  user: UserReducer,
  auth: AuthReducer
})

export default rootReducer
