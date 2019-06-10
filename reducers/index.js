import { combineReducers } from "redux";

import authReducer from "./auth";
import serviceReducer from "./service";
import componentReducer from "./components";

export default combineReducers({
  auth: authReducer,
  service: serviceReducer,
  component: componentReducer
});
