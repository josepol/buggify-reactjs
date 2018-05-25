import {LIST_BUGS, LIST_BUGS_ERROR, LOADING_BUGS} from './Home.constants';

const initialState = {
    bugs: []
}

const homeReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case LIST_BUGS:
            return {
                state,
                bugs: action.payload
            }
        case LIST_BUGS_ERROR:
            console.log('error');
        return state;
        case LOADING_BUGS:
            console.log('LOADING_BUGS');
        return state;
        default:
            return state
    }
}

export default homeReducer