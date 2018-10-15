import {LIST_BUGS, LIST_BUGS_ERROR, REFRESH_USER, REFRESH_USER_ERROR, DELETE_BUG_SUCCESS, DELETE_BUG_ERROR, DELETE_BUG_UNDEFINED} from './Home.constants';

const initialState = {
    bugs: [],
    refreshStatus: false,
    deleteBugStatus: false
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
            }
        case REFRESH_USER_ERROR:
            return {
                ...state,
                refreshStatus: 'ko'
            }
        case DELETE_BUG_SUCCESS:
            return {
                ...state,
                deleteBugStatus: action.payload.data.status
            }
        case DELETE_BUG_ERROR:
            return {
                ...state,
                deleteBugStatus: false
            }
        case DELETE_BUG_UNDEFINED:
            return {
                ...state,
                deleteBugStatus: undefined
            }
        default:
            return state
    }
}

export default homeReducer