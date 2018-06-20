const initialState = {
    obj : {},
    isLoading: true,
}

export default function(state = initialState, action) {
    if(action.type === "POST_SUCCESS") {
        return {
            ...state,
            obj: action.obj
        }
    }

    if(action.type==="POST_LOADING") {
        return {
            ...state,
            isLoading: action.isLoading
        }
    }
    return state;
}