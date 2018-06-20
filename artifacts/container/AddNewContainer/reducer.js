const initialState = {
    obj: {},
    isLoading: true,
};
export default function (state = initialState, action) {
    if (action.type === "POST_SUCCESS") {
        return Object.assign({}, state, { obj: action.obj });
    }
    if (action.type === "POST_LOADING") {
        return Object.assign({}, state, { isLoading: action.isLoading });
    }
    return state;
}
//# sourceMappingURL=reducer.js.map