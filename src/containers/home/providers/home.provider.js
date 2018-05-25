import * as axios from 'axios'
import {listBugs, listBugsError, listBugsLoading} from '../Home.actions'

export function listBugsProvider() {
    return (dispatch) => {
        dispatch(listBugsLoading());
        axios.get('assets/mocks/bugs.json').then(response => dispatch(listBugs(response.data)))
        .catch(error => dispatch(listBugsError()))
    }
}