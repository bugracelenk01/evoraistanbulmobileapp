/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { Login, ForgotPassword, MainPage } from "./views";
import { Router, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
const store = createStore(reducers, applyMiddleware(thunk));

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
        <Router>
          <Scene key="root" component={MainPage} hideNavBar={true}>
            <Scene key="main" component={MainPage} />
            <Scene key="forgotPassword" component={ForgotPassword} />
            <Scene key="login" component={Login} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
