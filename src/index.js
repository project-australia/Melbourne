import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'

import history from './config/utils/historyRouter'

import store from './config/store/createdStore'
import App from './modules/App'

persistStore(store, {
  whitelist: [
    '',
  ],
}, () => {
  render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  ), document.getElementById('root'))
})
registerServiceWorker()