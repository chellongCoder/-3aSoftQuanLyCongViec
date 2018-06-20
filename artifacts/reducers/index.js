import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import homeReducer from "../container/HomeContainer/reducer";
import splashReducer from './../container/SplashScreenContainer/reducer';
import addNewReducer from './../container/AddNewContainer/reducer';
export default combineReducers({
    form: formReducer,
    homeReducer,
    splashReducer,
    addNewReducer
});
//# sourceMappingURL=index.js.map