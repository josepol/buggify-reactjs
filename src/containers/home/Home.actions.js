import { LIST_BUGS, LIST_BUGS_SUCCESS, LIST_BUGS_ERROR } from "./Home.constants";

export const listBugs = () => {
    return {
        type: LIST_BUGS
    }
}

export const listBugsSuccess = (payload) => {
    return {
        type: LIST_BUGS_SUCCESS,
        payload
    }
}

export const listBugsError = () => {
    return {
        type: LIST_BUGS_ERROR
    }
}