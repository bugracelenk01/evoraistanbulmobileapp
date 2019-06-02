import axios from "axios";
import { AsyncStorage } from "react-native";
import { SET_USER, LOGOUT_USER, OPEN_LOADER, CLOSE_LOADER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import { Actions } from "react-native-router-flux";

export function login(data) {
  return dispatch => {
    dispatch({ type: OPEN_LOADER });
    return axios
      .post("http://localhost:3010/api/users/login", {
        email: data.email,
        password: data.password
      })
      .then(res => {
        alert(res.status);
        const token = res.data.token;
        AsyncStorage.setItem("jwtToken", token);
        setAuthToken(token);
        dispatch(setCurrentUser(token));
        dispatch({ type: CLOSE_LOADER });
      })
      .catch(err => alert(err))
      .finally(() => {
        Actions.main();
        dispatch({ type: CLOSE_LOADER });
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
    setAuthToken(false);
    dispatch(logoutUser());
    Actions.login();
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

export function registerUser(data) {
  return dispatch => {
    dispatch({ type: OPEN_LOADER });
    return axios
      .post("http://localhost:3010/api/users/signup", {
        authData: data.authData,
        profileData: data.profileData
      })
      .then(res => {
        if (res.status == 200) {
          dispatch(
            login({
              email: data.authData.email,
              password: data.authData.password
            })
          );
        }
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => {
        dispatch({ type: CLOSE_LOADER });
        Actions.main();
      });
  };
}
