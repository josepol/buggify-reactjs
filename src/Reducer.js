import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import HomeReducer from './containers/home/Home.reducer'
import LayoutReducer from './components/layout/Layout.reducer'
import LoginReducer from './containers/login/Login.reducer'
import AddBugReducer from './containers/add-bug/Add-bug.reducer'

export default combineReducers({
    HomeReducer,
    LayoutReducer,
    LoginReducer,
    AddBugReducer,
    form: formReducer
})