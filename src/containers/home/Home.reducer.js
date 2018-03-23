import {LIST_BUGS, LIST_BUGS_SUCCESS} from './Home.constants';

const initialState = {
    bugs: []
}

const homeReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case LIST_BUGS:
            return state
        case LIST_BUGS_SUCCESS:
            return {
                state,
                bugs: action.payload
            }
        default:
            return state
    }
}

export default homeReducer