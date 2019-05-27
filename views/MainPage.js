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
import { Icon, Left, Right, Body, Header, Text, Footer, FooterTab, Button} from "native-base";
import { Service } from "../components";
import { connect } from "react-redux";
import { getServices } from "../actions/mainPageActions";
import { Actions } from "react-native-router-flux";
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
        <Header transparent style={{ marginTop: 20 }}>
          <Left>
            <TouchableOpacity
              onPress={this.handleClick}
              style={styles.loginIcon}
              onPress={() => Actions.login()}
            >
              <Icon name="contact" style={{ color: "#fff", marginLeft: 10 }} />
              <Text
                style={{
                  fontSize: 12,
                  width: "20%",
                  marginBottom: -100,
                  color: "#fff"
                }}
              >
                Giriş Yap
              </Text>
            </TouchableOpacity>
          </Left>
          <Body>
            <Image
              style={styles.logo}
              source={require("../resources/logo.png")}
            />
          </Body>
          <Right>
            <TouchableOpacity
              onPress={this.handleClick}
              style={styles.basketIcon}
            >
              <Icon name="basket" style={{ color: "#fff", marginLeft: 10 }} />
              <Text
                style={{
                  fontSize: 10,
                  width: "60%",
                  marginLeft: 0,
                  color: "#fff"
                }}
              >
                Alışveriş Sepeti
              </Text>
            </TouchableOpacity>
          </Right>
        </Header>

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

const styles = StyleSheet.create({
  headerContainer: {
    height: 100
  },
  logo: {
    marginLeft: "10%",
    marginBottom: 20
  },
  basketIcon: {
    right: 0,
    alignSelf: "flex-end",

    marginRight: -20
  },
  loginIcon: {
    left: 0,
    alignSelf: "flex-end",
    marginTop: -10,
    marginRight: 10
  }
});

function mapStateToProps(state) {
  return {
    mainPage: state.mainPage
  };
}

export default connect(
  mapStateToProps,
  { getServices }
)(MainPage);
