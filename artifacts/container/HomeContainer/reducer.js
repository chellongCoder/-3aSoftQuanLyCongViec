const initialState = {
    list: [],
    isLoading: true,
    isLogout: false,
};
export default function (state = initialState, action) {
    if (action.type === "FETCH_LIST_SUCCESS") {
        return Object.assign({}, state, { list: action.list });
    }
    if (action.type === "LIST_IS_LOADING") {
        console.log("loading", action.isLoading);
        return Object.assign({}, state, { isLoading: action.isLoading });
    }
    if (action.type === "LOGOUT") {
        console.log("logout");
        return Object.assign({}, state, { isLogout: action.isLogout });
    }
    return state;
}
//# sourceMappingURL=reducer.js.map