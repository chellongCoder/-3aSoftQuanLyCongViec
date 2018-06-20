export const navigateLogin = (navigation) => {
    return {
        type: "NAVIGATE_LOGIN",
        navigation: navigation,
    };
};
export const navigate = (navigation) => {
    console.log("navigate .1");
    return dispatch => {
        dispatch(navigateLogin(navigation));
    };
};
//# sourceMappingURL=actions.js.map