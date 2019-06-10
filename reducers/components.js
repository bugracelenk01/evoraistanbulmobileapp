import { CHANGE_COMPONENT_STATE } from "../actions/types";

const initialState = {
  loader: false,
  cart: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COMPONENT_STATE:
      return { ...state, [action.payload.component]: action.payload.state };
    default:
      return state;
  }
};
