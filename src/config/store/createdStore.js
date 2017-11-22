import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { persistStore, autoRehydrate } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './../../redux/'

const middleware = [thunk, multi]

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware), autoRehydrate()),
)

export default store
