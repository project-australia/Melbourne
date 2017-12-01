import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Router from './Router'

import './shared/style/app.css'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Router />
      </MuiThemeProvider>
    )
  }
}

export default App
