import { ADD_BUG, ADD_BUG_ERROR } from './Add-bug.constants'

const initialState = {
    addBugStatus: false
}

const AddBugReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUG:
            return {
                addBugStatus: action.payload
            }
        case ADD_BUG_ERROR:
            return {
                addBugStatus: action.payload
            }
        default:
        return state;
    }
}

export default AddBugReducer;