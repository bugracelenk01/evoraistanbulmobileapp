import axios from "axios";
import { GET_SERVICES } from "./types";

export function getServices() {
  return dispatch => {
    return axios
      .get("https://evoraistanbulbackend.herokuapp.com/api/mainpage/getservices")
      .then(res => {
        dispatch({
          type: GET_SERVICES,
          payload: res.data
        });
      });
  };
}

