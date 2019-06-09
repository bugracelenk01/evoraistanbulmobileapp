import { combineReducers } from "redux";

import authReducer from "./auth";
import mainPageReducer from "./service";
import loaderReducer from "./loader";

export default combineReducers({
  auth: authReducer,
  mainPage: mainPageReducer,
  loading: loaderReducer
});
