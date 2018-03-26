import {GET_PROFILE_DATA, GET_PROFILE_DATA_SUCCESS, GET_PROFILE_DATA_ERROR} from './Layout.constants'

export const getProfileSuccess = (payload) => {
    return {
        type: GET_PROFILE_DATA_SUCCESS,
        payload
    }
}

export const getProfileError = () => {
    return {
        type: GET_PROFILE_DATA_ERROR
    }
}