import { LOGIN, REGISTER } from './Login.constants'
import * as axios from 'axios'

const initialState = {
    token: '',
    status: false
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
            token: action.payload
        }
        case REGISTER:
        setAuthTokenAndHeader(action)
        return {
            ...state,
            status: action.payload
        }
        default:
        return state
    }
}

export default loginReducer