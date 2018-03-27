import {LIST_BUGS} from './Home.constants';

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
        default:
            return state
    }
}

export default homeReducer