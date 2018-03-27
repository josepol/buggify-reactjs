import * as axios from 'axios'
import {getProfile, getProfileError} from '../layout/Layout.actions'


export function getProfileData() {
    return (dispatch) => {
        return axios.get('assets/mocks/profile-data.json')
        .then(response => {
            dispatch(getProfile(response.data))
        })
        .catch(error => {
            dispatch(getProfileError())
        })
    }
}