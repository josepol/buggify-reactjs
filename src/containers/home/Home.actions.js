import { LIST_BUGS, LIST_BUGS_ERROR, REFRESH_USER, REFRESH_USER_ERROR } from "./Home.constants";

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