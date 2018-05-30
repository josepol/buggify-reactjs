import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import  Store from './Store'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'))
registerServiceWorker()
