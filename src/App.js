import React from 'react'
import * as axios from 'axios'
import Modal from 'react-modal'

import AppRoute from './App.route'

Modal.setAppElement('#root')

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
