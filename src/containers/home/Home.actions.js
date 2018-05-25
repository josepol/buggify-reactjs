import { LIST_BUGS, LIST_BUGS_ERROR, LOADING_BUGS } from "./Home.constants";

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

export const listBugsLoading = () => {
    return {
        type: LOADING_BUGS
    }
}