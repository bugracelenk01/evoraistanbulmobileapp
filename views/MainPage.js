/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { FlatList, ImageBackground } from "react-native";
import { Service, Header } from "../components";
import { connect } from "react-redux";
import { getServices, getService } from "../actions/serviceActions";
import { Container, Content } from "native-base";

class MainPage extends Component {
  handleClick() {
    alert("Hello World");
  }

  componentWillMount() {
    this.props.getServices();
    this.props.getService(4);
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://www.teknikyapi.com/Content/images/projeler/proje_resimler/7934-evoraistanbul.png"
        }}
        style={{ width: "100%", height: "100%" }}
        blurRadius={1}
      >
        <Header />
        <FlatList
          numColumns={2}
          data={this.props.service.services}
          renderItem={({ item }) => (
            <Service image={item.image} serviceName={item.name} />
          )}
          keyExtractor={(item, index) => index}
        />
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    service: state.service
  };
}

export default connect(
  mapStateToProps,
  { getServices, getService }
)(MainPage);
