import * as axios from 'axios'
import {listBugs, listBugsError, listBugsLoading} from '../Home.actions'
import { ENDPOINT } from '../../../App.constants'

export function listBugsProvider() {
    return dispatch => axios.get('assets/mocks/bugs.json')
    .then(response => dispatch(listBugs(response.data)))
    .catch(error => dispatch(listBugsError()))
}

export function refreshUser() {
    return dispatch => axios.get(`${ENDPOINT}/auth/refresh`)
    .then((response) => {
        console.log(response)
    })
    // .catch(dispatch(loginErrorAction()))
}
