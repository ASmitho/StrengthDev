import { combineReducers } from "redux"
import userReducer from "./userReducer"
import passReducer from "./passReducer"
import loadingReducer from "./loadingReducer"
import authenticateReducer from "./authenticateReducer"
import logoutReducer from "./logoutReducer"
import dataReducer from "./dataReducer"

//import whatever from your other reducers

const appReducers = combineReducers({
    user: userReducer,
    password: passReducer,
    load: loadingReducer,
    auth: authenticateReducer, 
    logout: logoutReducer,
    data: dataReducer,

})

const allReducers = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state.user = undefined;
        state.load.isLoading = false;
        state.password = undefined;
        state.auth.authenticated = false; 
        state.data = undefined;
    }
    return appReducers(state, action)
  }

export default allReducers;