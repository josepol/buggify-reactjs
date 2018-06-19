import { LOGIN, REGISTER } from './Login.constants'

const initialState = {
    token: '',
    status: false
}

const loginReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN:
        localStorage.setItem('token', action.payload)
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