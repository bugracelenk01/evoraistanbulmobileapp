/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import {
  Login,
  ForgotPassword,
  MainPage,
  RegisterUser,
  ServicePage
} from "./views";
import { Router, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import store from "./reducers/store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import Loader from "./components/Loader";
import { Footer,ShoppingCart } from "./components";

XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function(uri, options, ...args) {
  return global._fetch(uri, options, ...args).then(response => {
    console.log("Fetch", { request: { uri, options, ...args }, response });
    return response;
  });
};

AsyncStorage.getItem("jwtToken", (err, token) => {
  if (token) {
    setAuthToken(token);
    store.dispatch(setCurrentUser(AsyncStorage.getItem("jwtToken")));
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Loader />
        <ShoppingCart />
        <Router>
          <Scene key="root" component={MainPage} hideNavBar={true}>
            <Scene key="main" component={MainPage} />
            <Scene key="forgotPassword" component={ForgotPassword} />
            <Scene key="login" component={Login} />
            <Scene key="register" component={RegisterUser} />
            <Scene key="service" component={ServicePage} />
          </Scene>
        </Router>
        <Footer />
      </Provider>
    );
  }
}
