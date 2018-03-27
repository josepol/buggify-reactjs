import {GET_PROFILE_DATA, GET_PROFILE_DATA_ERROR} from './Layout.constants'

export const getProfile = (payload) => {
    return {
        type: GET_PROFILE_DATA,
        payload
    }
}

export const getProfileError = () => {
    return {
        type: GET_PROFILE_DATA_ERROR
    }
}