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
export default class ForgotPassword extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://www.teknikyapi.com/Content/images/projeler/proje_resimler/7934-evoraistanbul.png"
        }}
        blurRadius={1}
        style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
      >
        <Image style={styles.logo} source={require("../resources/logo.png")} />
        <Form style={{ marginTop: "10%" }}>
          <Item floatingLabel>
            <Label style={{ color: "#fff" }}>E-Posta Adresiniz</Label>
            <Input style={{ color: "#fff" }} textContentType="emailAddress"/>
          </Item>
        </Form>

        <Button bordered block light style={styles.button}>
          <Text light style={{ marginTop: "6%" }}>
            Şifremi Yenile
          </Text>
        </Button>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: "25%",
    marginBottom: 20
  },
  button: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "10%"
  }
});
