import React, { Component } from "react";
import { ImageBackground } from "react-native";

export default class CIB extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://cdn-images-1.medium.com/max/800/0*oHUl3O7hD4k1VwvR"
        }}
        style={{ width: "100%", height: "100%" }}
        blurRadius={1}
        {...this.props}
      />
    );
  }
}
