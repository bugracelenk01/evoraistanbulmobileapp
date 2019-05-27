import { combineReducers } from "redux";

import authReducer from "./auth";
import mainPageReducer from "./mainPage";

export default combineReducers({
  auth: authReducer,
  mainPage: mainPageReducer
});
