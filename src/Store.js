import {createStore, applyMiddleware} from 'redux'
import rootReducers from './Reducer'
import thunk from 'redux-thunk'

export default createStore(rootReducers, applyMiddleware(thunk));