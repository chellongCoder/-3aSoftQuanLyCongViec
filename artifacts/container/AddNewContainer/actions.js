export function postLoading(bool) {
    return {
        type: "POST_LOADING",
        isLoading: bool,
    };
}
export function postSuccess(obj) {
    return {
        type: "POST_SUCCESS",
        obj
    };
}
export function create(obj) {
    return dispatch => {
        dispatch(postSuccess(obj));
        dispatch(postLoading(false));
    };
}
//# sourceMappingURL=actions.js.map