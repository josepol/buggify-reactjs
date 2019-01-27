import {LIST_BUGS, LIST_BUGS_ERROR, REFRESH_USER, REFRESH_USER_ERROR} from './Home.constants';

const initialState = {
    bugs: [],
    refreshStatus: false
}

const homeReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case LIST_BUGS:
            return {
                ...state,
                bugs: action.payload
            }
        case LIST_BUGS_ERROR:
            return state;
        case REFRESH_USER:
            return {
                ...state,
                refreshStatus: !!action.payload.data.token ? 'ok' : 'ko'
            };
        case REFRESH_USER_ERROR:
            return {
                ...state,
                refreshStatus: 'ko'
            };;
        default:
            return state
    }
}

export default homeReducer