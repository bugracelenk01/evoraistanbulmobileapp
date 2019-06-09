import { GET_SERVICES, GET_SERVICE } from "../actions/types";

const initialState = {
  services: [],
  service: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return { ...state, services: action.payload };
    case GET_SERVICE:
      return { ...state, service: action.payload };
    default:
      return state;
  }
};
