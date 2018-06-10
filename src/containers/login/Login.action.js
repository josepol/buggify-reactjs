import { LOGIN, LOGIN_ERROR } from './Login.constants'

export const loginAction = payload => {
    return {
        type: LOGIN,
        payload
    }
}

export const loginErrorAction = payload => {
    return {
        type: LOGIN_ERROR,
        payload
    }
}