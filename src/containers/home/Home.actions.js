import { LIST_BUGS, LIST_BUGS_ERROR, REFRESH_USER, REFRESH_USER_ERROR, DELETE_BUG_SUCCESS, DELETE_BUG_ERROR, DELETE_BUG_UNDEFINED } from "./Home.constants";

export const listBugs = (payload) => {
    return {
        type: LIST_BUGS,
        payload
    }
}

export const listBugsError = () => {
    return {
        type: LIST_BUGS_ERROR
    }
}

export const refreshUser = (payload) => {
    return {
        type: REFRESH_USER,
        payload
    }
}

export const refreshUserError = () => {
    return {
        type: REFRESH_USER_ERROR
    }
}

export const deleteBugSuccess = (payload) => {
    return {
        type: DELETE_BUG_SUCCESS,
        payload
    }
}

export const deleteBugError = () => {
    return {
        type: DELETE_BUG_ERROR
    }
}

export const deleteBugStatusUndefined = () => {
    return {
        type: DELETE_BUG_UNDEFINED
    }
}