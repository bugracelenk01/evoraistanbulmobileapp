import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default class Service extends Component {
  render() {
    return (
      <TouchableOpacity style={style.button}>
        <ImageBackground
          source={{ uri: this.props.image }}
          style={{ width: 140, height: 140 }}
        >
          <View style={{ width: "100%", height: 30, backgroundColor: "rgba(52, 52, 52, 0.8)", bottom: 0, position: "absolute" }}>
            <Text style={{ marginTop: 5,textAlign: "center", color: "#fff", fontSize: 15}}>{this.props.serviceName}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({

  button: {
    paddingTop: "10%",
    paddingLeft: "5%",
    borderRadius: 50
  }
});
