import {combineReducers} from 'redux'
import HomeReducer from './containers/home/Home.reducer'
import LayoutReducer from './components/layout/Layout.reducer'

export default combineReducers({
    HomeReducer,
    LayoutReducer
})