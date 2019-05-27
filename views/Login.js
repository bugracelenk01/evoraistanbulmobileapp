import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import {
  Container,
  Content,
  Item,
  Input,
  Form,
  Label,
  Text,
  Button
} from "native-base";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { Actions } from "react-native-router-flux";
import { DefaultHeader } from "../components";

class Login extends Component {
  state = { email: "", password: "" };

  render() {
    const { login } = this.props;

    return (
      <ImageBackground
        source={{
          uri:
            "https://www.teknikyapi.com/Content/images/projeler/proje_resimler/7934-evoraistanbul.png"
        }}
        blurRadius={1}
        style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
      >
        <DefaultHeader back={true} />
        <Form style={{ marginTop: "10%" }}>
          <Item floatingLabel>
            <Label style={{ color: "#fff" }}>Kullanıcı Adı</Label>
            <Input
              style={{ color: "#fff" }}
              textContentType="emailAddress"
              name="email"
              onChangeText={text => this.setState({ email: text })}
            />
          </Item>

          <Item floatingLabel>
            <Label style={{ color: "#fff" }}>Şifre</Label>
            <Input
              style={{ color: "#fff" }}
              secureTextEntry={true}
              name="password"
              onChangeText={text => this.setState({ password: text })}
            />
          </Item>
        </Form>

        <Button
          bordered
          block
          light
          style={styles.button}
          onPress={
            () =>
              login({ email: this.state.email, password: this.state.password })
            // alert(this.state.email)
          }
        >
          <Text light style={{ marginTop: "6%" }}>
            Giriş Yap
          </Text>
        </Button>

        <Button
          onPress={() => Actions.forgotPassword()}
          style={styles.buttonFlat}
          block
          transparent
          light
        >
          <Text light style={{ marginTop: "6%" }}>
            Şifremi Unuttum
          </Text>
        </Button>
        <Button style={styles.buttonFlat} block transparent light>
          <Text light style={{ marginTop: "6%" }}>
            Kayıt Ol
          </Text>
        </Button>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // You should only need this
    height: "100%", // But these wouldn't hurt.
    width: "100%"
  },
  logo: {
    marginLeft: "25%",
    marginBottom: 20
  },
  basketIcon: {
    right: 0,
    alignSelf: "flex-end",
    marginTop: -80,
    marginRight: 25
  },
  button: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "10%"
  },
  buttonFlat: {
    width: "100%",
    marginTop: "2%"
  }
});

export default connect(
  null,
  { login }
)(Login);
