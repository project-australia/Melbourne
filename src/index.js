import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import history from './config/historyRouter'

import './config/axiosConfig'

import Store from './config/store'
import App from './modules/App'

render((
  <Provider store={Store.store}>
    <PersistGate loading={null} persistor={Store.persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>
), document.getElementById('root'))
