import { ADD_BUG, ADD_BUG_ERROR, RESET_ADD_BUG_STATUS } from './Add-bug.constants'

const initialState = {
    addBugStatus: false
}

const AddBugReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUG:
            return {
                addBugStatus: action.payload.status,
                bugId: action.payload.id
            }
        case ADD_BUG_ERROR:
            return {
                addBugStatus: action.payload,
                bugId: ''
            }
        case RESET_ADD_BUG_STATUS:
            return {
                addBugStatus: undefined,
                bugId: undefined
            }
        default:
        return state;
    }
}

export default AddBugReducer;