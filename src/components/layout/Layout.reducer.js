import {GET_PROFILE_DATA} from './Layout.constants'


const initialState = {
    profile: {}
}

const layoutReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case GET_PROFILE_DATA:
            return {
                profile: action.payload
            }
        default:
            return state;
    }
}

export default layoutReducer