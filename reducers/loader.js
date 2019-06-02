import { OPEN_LOADER, CLOSE_LOADER } from "../actions/types";

const initialState = {
  loader: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOADER:
      return { loader: true };
    case CLOSE_LOADER:
      return { loader: false };
    default:
      return state;
  }
};
