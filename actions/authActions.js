import axios from "axios";
import { AsyncStorage } from "react-native";
import { SET_USER, LOGOUT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
export function login(data) {
  return dispatch => {
    return axios
      .post("https://evoraistanbulbackend.herokuapp.com/api/users/login", data)
      .then(res => {
        const token = res.data.token;
        AsyncStorage.setItem("jwtToken", token);
        setAuthToken(token);
        dispatch(setCurrentUser(token));
      });
  };
}

export function setCurrentUser(token) {
  return {
    type: SET_USER,
    token
  };
}

export function logout() {
  return dispatch => {
    AsyncStorage.removeItem("jwtToken");
    setAuthToken();
    dispatch(logoutUser());
  };
}

export function logoutUser() {
  return {
    typpe: LOGOUT_USER
  };
}
