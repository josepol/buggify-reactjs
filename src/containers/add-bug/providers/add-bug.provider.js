import * as axios from 'axios'
import { ENDPOINT } from '../../../App.constants'
import { addBug, addBugError } from '../Add-bug.actions'

export function addBugProvider(bug) {
    return dispatch => axios.post(`${ENDPOINT}/bug/create`, bug)
    .then(response => dispatch(addBug(response.data.status)))
    .catch(error => dispatch(addBugError(error)))
}