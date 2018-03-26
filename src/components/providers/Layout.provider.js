import * as axios from 'axios'
import {getProfile, getProfileSuccess, getProfileError} from '../layout/Layout.actions'


export function getProfileData() {
    return (dispatch) => {
        return axios.get('assets/mocks/profile-data.json')
        .then(response => {
            dispatch(getProfileSuccess(response.data))
        })
        .catch(error => {
            dispatch(getProfileError())
        })
    }
}