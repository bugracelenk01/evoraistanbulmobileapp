import { SET_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        isAuthenticated: true,
        token: action.token
      };
    case LOGOUT_USER:
      return {
        isAuthenticated: false,
        token: ""
      }
    default:
      return state;
  }
};
