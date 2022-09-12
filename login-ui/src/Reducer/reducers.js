//responsável pelo combinar os reducers da aplicação

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";

const allReducers = combineReducers({
    auth: authReducer,
    register: registerReducer
})

export default allReducers