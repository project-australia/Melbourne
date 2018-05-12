import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import storage from 'redux-persist/lib/storage'

import rootReducer from './../redux/'

const middleware = [thunk, multi]

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)))
const persistor = persistStore(store)

export default { store, persistor }
