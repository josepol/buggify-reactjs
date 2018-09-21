import { LOGIN, REGISTER, LOGIN_ERROR, REGISTER_ERROR } from './Login.constants'
import * as axios from 'axios'

const initialState = {
    token: '',
    status: ''
}

const setAuthTokenAndHeader = (action) => {
    localStorage.setItem('token', `bearer ${action.payload}`)
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
}

const loginReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN:
        setAuthTokenAndHeader(action)
        return {
            ...state,
            token: action.payload,
            random: Math.random(10)
        }
        case REGISTER:
        setAuthTokenAndHeader(action)
        return {
            ...state,
            status: action.payload,
            random: Math.random(10)
        }
        case LOGIN_ERROR:
        return {
            ...state,
            token: false,
            random: Math.random(10)
        }
        case REGISTER_ERROR: 
        return {
            ...state,
            status: false,
            random: Math.random(10)
        }
        default:
        return state
    }
}

export default loginReducer