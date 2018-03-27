import * as axios from 'axios'
import {listBugs, listBugsError} from '../Home.actions'

export function listBugsProvider() {
    return (dispatch) => {
        return axios.get('assets/mocks/bugs.json').then(response => {
            dispatch(listBugs(response.data))
        })
        .catch(error => {
            dispatch(listBugsError())
        })
    }
}