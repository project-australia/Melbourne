import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from './shared/components/layout/Header'
import Footer from './shared/components/layout/Footer'
import Router from './Router'

import './shared/style/app.css'
import 'normalize.css'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Router />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
