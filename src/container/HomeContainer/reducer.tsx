const initialState = {
	list: [],
	isLoading: true,
	isLogout: false,
};

export default function(state = initialState, action) {
	if (action.type === "FETCH_LIST_SUCCESS") { //nếu lấy ds từ API thành công
		return {
			...state, //isLoading = true theo khởi tạo state
			list: action.list,
		};
	}
	if (action.type === "LIST_IS_LOADING") { //nếu list đã fetch xong
		console.log("loading", action.isLoading)
		return {
			...state, 
			isLoading: action.isLoading,//isLoading = false theo mặc định truyền vào action
		};
	}
	if(action.type==="LOGOUT") {
		console.log("logout")
		return {
			...state,
			isLogout: action.isLogout,
		}
	}
	return state;
}
