import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";

const allReducers = combineReducers({
    auth: authReducer,
    register: registerReducer
})

export default allReducers