import * as axios from 'axios'
import { ENDPOINT } from '../../../App.constants'
import { addBug, addBugError, addBugFile, addBugFileError } from '../Add-bug.actions'

export function addBugProvider(bug) {
    return dispatch => axios.post(`${ENDPOINT}/bug/create`, bug)
    .then(response => dispatch(addBug(response.data)))
    .catch(error => dispatch(addBugError(error)))
}

export function addFileProvider(formData) {
    return dispatch => axios.post(`${ENDPOINT}/bug/create-file`, formData)
    .then(response => dispatch(addBugFile(response.data.status)))
    .catch(error => dispatch(addBugFileError(error)))
}