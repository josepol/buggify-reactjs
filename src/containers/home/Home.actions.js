import { LIST_BUGS, LIST_BUGS_ERROR } from "./Home.constants";

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