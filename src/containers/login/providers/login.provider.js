import * as axios from 'axios'
import { loginAction, loginErrorAction, registerAction, registerErrorAction } from '../Login.action'
import { ENDPOINT } from '../../../App.constants'

export const loginProvider = (loginData) => {
    return dispatch => axios.post(`${ENDPOINT}/auth/login`, loginData).then((response) => dispatch(loginAction(response.data.token)))
    .catch(dispatch(loginErrorAction()))
}

export const registerProvider = (registerData) => {
    return dispatch => axios.post(`${ENDPOINT}/auth/register`, registerData).then((response) => dispatch(registerAction(response.data.status)))
    .catch(dispatch(registerErrorAction()))
}