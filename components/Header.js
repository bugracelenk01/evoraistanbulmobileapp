import React, { Component } from "react";
import { Header, Icon, Text, Left, Body, Right } from "native-base";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { back } = this.props;
    return (
      <Header transparent style={{ marginTop: 20 }}>
        <Left>
          {back ? (
            <TouchableOpacity
              style={styles.loginBack}
              onPress={() => Actions.pop()}
            >
              <Icon
                name="arrow-back"
                style={{ color: "#fff", marginLeft: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.loginIcon}
              onPress={
                this.props.auth
                  ? () => Actions.login()
                  : () => this.props.logout()
              }
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
                {this.props.isAuth ? "Çıkış Yap" : "Giriş Yap"}
              </Text>
            </TouchableOpacity>
          )}
        </Left>
        <Body>
          <Image
            style={styles.logo}
            source={require("../resources/logo.png")}
          />
        </Body>
        {back ? (
          <Right />
        ) : (
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
        )}
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100
  },
  logo: {
    marginLeft: -35,
    marginTop: 20,
    marginBottom: 20,
    width: 350,
    resizeMode: "center"
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
  },
  loginBack: {
    left: 0,
    alignSelf: "flex-end",
    marginTop: -10,
    marginRight: 20
  }
});

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps, { logout })(DefaultHeader);
