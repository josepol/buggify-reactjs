import { LOGIN, REGISTER } from './Login.constants'

const initialState = {
    token: '',
    status: false
}

const loginReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN:
        return {
            ...state,
            token: action.payload.token
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