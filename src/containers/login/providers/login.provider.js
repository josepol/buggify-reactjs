import * as axios from 'axios'
import { loginAction, loginErrorAction, registerAction } from '../Login.action'
import { ENDPOINT } from '../../../App.constants'

export const loginProvider = (loginData) => {
    return dispatch => axios.post(`${ENDPOINT}/auth/login`, loginData).then((response) => dispatch(loginAction(response.token)))
    .catch(dispatch(loginErrorAction()))
}

export const registerProvider = (registerData) => {
    return dispatch => axios.post(`${ENDPOINT}/auth/register`, registerData).then((response) => dispatch(registerAction(response.data.status)))
    .catch(dispatch(loginErrorAction()))
}