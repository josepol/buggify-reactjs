import * as axios from 'axios'
import { loginAction, loginErrorAction } from '../Login.action'
import { ENDPOINT } from '../../../App.constants'


export const loginProvider = (loginData) => {
    const data = {
        token: 'asdasdasdasd'
    }
    return dispatch => axios.post(`${ENDPOINT}/auth/login`, loginData).then(() => dispatch(loginAction(data)))
    .catch(dispatch(loginErrorAction()))
}