import {GET_PROFILE_DATA, GET_PROFILE_DATA_SUCCESS} from './Layout.constants'


const initialState = {
    profile: {}
}

const layoutReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case GET_PROFILE_DATA:
            return state
        case GET_PROFILE_DATA_SUCCESS:
            return {
                profile: action.payload
            }
        default:
            return state;
    }
}

export default layoutReducer