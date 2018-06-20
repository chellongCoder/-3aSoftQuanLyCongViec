 export function postLoading(bool : boolean) {
    return {
        type: "POST_LOADING",
        isLoading: bool,
    }
}

export function postSuccess(obj: Object) {
    return {
        type: "POST_SUCCESS",
        obj
    }
}

export function create(obj) {
    return dispatch => {
        dispatch(postSuccess(obj))
        dispatch(postLoading(false))
    }
}