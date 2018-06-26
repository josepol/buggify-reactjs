import React from 'react'
import * as axios from 'axios'

import AppRoute from './App.route'

class App extends React.Component {
  
  constructor() {
    super()
    this.setHeaders()
  }

  setHeaders() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
  }

  render() {
    return (
      <AppRoute />
    )
  }
}

export default App
