import axios from "axios";
import { GET_SERVICES, GET_SERVICE } from "./types";

export function getServices() {
  return dispatch => {
    return axios.get("http://localhost:3010/api/services").then(res => {
      dispatch({
        type: GET_SERVICES,
        payload: res.data
      });
    });
  };
}

export function getService(id) {
  return dispatch => {
    return axios.get(`http://localhost:3010/api/services/${id}`).then(res => {
      dispatch({
        type: GET_SERVICE,
        payload: res.data[0]
      });
    });
  };
}
