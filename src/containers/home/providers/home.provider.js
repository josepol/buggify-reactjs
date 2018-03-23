import * as axios from 'axios'
import {listBugs, listBugsSuccess, listBugsError} from '../Home.actions'

export function listBugsProvider() {
    return (dispatch) => {
        dispatch(listBugs())
        return axios.get('assets/mocks/bugs.json').then(response => {
            dispatch(listBugsSuccess(response.data))
        })
        .catch(error => {
            dispatch(listBugsError())
        })
    }
}