import { LOGIN } from './Login.constants'

const initialSate = {

}

const loginReducer = (state = initialSate, action = {}) => {
    switch (action.type) {
        case LOGIN:
        return {
            ...state,
            token: action.payload.token
        }
        default:
        return state
    }
}

export default loginReducer