import React, { Component } from 'react'
import Router from './Router'
import ReduxToastr from 'react-redux-toastr'

import Header from './shared/components/layout/Header'

import './shared/style/app.css'
import 'semantic-ui-css/semantic.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Router />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar/>
      </div>
    )
  }
}

export default App
