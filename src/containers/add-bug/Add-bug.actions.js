import { ADD_BUG, ADD_BUG_ERROR } from './Add-bug.constants'

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