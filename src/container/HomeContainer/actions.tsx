export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchListSuccess(list: Object) {
	return {
		type: "FETCH_LIST_SUCCESS",
		list,
	};
}
export function checkLogout(bool: boolean) {
	return {
		type: "LOGOUT",
		isLogout: bool,
	}
}
export function fetchList(url) {
	return dispatch => {
		dispatch(fetchListSuccess(url));
		dispatch(listIsLoading(false));
	};
}
export function logout() {
	return dispatch=>{
		dispatch(checkLogout(true)) //ban đầu truyền vào isLogout=true cho action
	}
}