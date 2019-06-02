/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import {
  Icon,
  Left,
  Right,
  Body,
  Header,
  Text,
  Footer,
  FooterTab,
  Button
} from "native-base";
import { Service } from "../components";
import { connect } from "react-redux";
import { getServices } from "../actions/mainPageActions";
import { Actions } from "react-native-router-flux";
import { DefaultHeader } from "../components";

class MainPage extends Component {
  handleClick() {
    alert("Hello World");
  }

  componentWillMount() {
    this.props.getServices();
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
        <DefaultHeader back={false}/>

        <FlatList
          numColumns={2}
          data={this.props.mainPage.services}
          renderItem={({ item }) => (
            <Service image={item.image} serviceName={item.name} />
          )}
          keyExtractor={(item, index) => index}
        />
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="apps" />
              <Text>Anasayfa</Text>
            </Button>
            <Button vertical>
              <Icon name="menu" />
              <Text>Servisler</Text>
            </Button>
            <Button vertical>
              <Icon active name="contact" />
              <Text>Hesap</Text>
            </Button>
          </FooterTab>
        </Footer>
      </ImageBackground>
    );
  }
}



function mapStateToProps(state) {
  return {
    mainPage: state.mainPage
  };
}

export default connect(
  mapStateToProps,
  { getServices }
)(MainPage);
