import * as axios from 'axios'
import {listBugs, listBugsError, refreshUser, refreshUserError, deleteBugSuccess, deleteBugError} from '../Home.actions'
import { ENDPOINT } from '../../../App.constants'

export function listBugsProvider() {
    return dispatch => axios.get(`${ENDPOINT}/bug/listAll`)
    .then(response => dispatch(listBugs(response.data)))
    .catch(error => dispatch(listBugsError()))
}

export function refreshUserProvider() {
    return dispatch => axios.get(`${ENDPOINT}/auth/refresh`)
    .then((response) => dispatch(refreshUser(response)))
    .catch(error => dispatch(refreshUserError()))
}

export function deleteBugProvider(bug) {
    return dispatch => axios.get(`${ENDPOINT}/bug/destroy/${bug.id}`)
    .then((response) => dispatch(deleteBugSuccess(response)))
    .catch(error => dispatch(deleteBugError()))
}
