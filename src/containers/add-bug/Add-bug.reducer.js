import { ADD_BUG, ADD_BUG_ERROR, RESET_ADD_BUG_STATUS } from './Add-bug.constants'

const initialState = {
    addBugStatus: false
}

const AddBugReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUG:
            console.log(action)
            return {
                addBugStatus: action.payload
            }
        case ADD_BUG_ERROR:
            return {
                addBugStatus: action.payload
            }
        case RESET_ADD_BUG_STATUS:
            return {
                addBugStatus: undefined
            }
        default:
        return state;
    }
}

export default AddBugReducer;