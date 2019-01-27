import { LOGIN, LOGIN_ERROR, REGISTER, REGISTER_ERROR } from './Login.constants'

export const loginAction = payload => {
    return {
        type: LOGIN,
        payload
    }
}

export const loginErrorAction = () => {
    return {
        type: LOGIN_ERROR
    }
}

export const registerAction = payload => {
    return {
        type: REGISTER,
        payload
    }
}

export const registerErrorAction = payload => {
    return {
        type: REGISTER_ERROR,
        payload
    }
}