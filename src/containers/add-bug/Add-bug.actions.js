import { ADD_BUG, ADD_BUG_ERROR, RESET_ADD_BUG_STATUS } from './Add-bug.constants'

export const addBug = (payload) => {
    return {
        type: ADD_BUG,
        payload
    }
}

export const addBugError = (payload) => {
    return {
        type: ADD_BUG_ERROR,
        payload
    }
}

export const resetAddBugStatus = (payload) => {
    return {
        type: RESET_ADD_BUG_STATUS,
        payload
    }
}