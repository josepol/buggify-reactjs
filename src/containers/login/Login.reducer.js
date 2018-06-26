import { LOGIN, REGISTER } from './Login.constants'
import * as axios from 'axios'

const initialState = {
    token: '',
    status: false
}

const loginReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN:
        localStorage.setItem('token', `bearer ${action.payload}`)
        axios.defaults.headers.common['authorization'] = `bearer ${action.payload}`
        return {
            ...state,
            token: action.payload
        }
        case REGISTER:
        return {
            ...state,
            status: action.payload
        }
        default:
        return state
    }
}

export default loginReducer