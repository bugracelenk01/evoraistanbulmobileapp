import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
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
import { registerUser } from "../actions/authActions";
import { Actions } from "react-native-router-flux";
import { DefaultHeader } from "../components";

class RegisterUser extends Component {
  state = {
    email: "celenk@gmail",
    password: "1234qwer",
    profileId: "",
    f_name: "bugra",
    l_name: "celenk",
    phone_number: "555555555",
    parsel: "3A",
    blok: "5A",
    daire: "32",
    inputValues: [
      { stateName: "email", label: "Email" },
      { stateName: "password", label: "Şifre" },
      { stateName: "f_name", label: "İsim" },
      { stateName: "l_name", label: "Soyisim" },
      {
        stateName: "phone_number",
        label: "Telefon Numarası"
      },
      { stateName: "parsel", label: "Parsel" },
      { stateName: "blok", label: "Blok" },
      { stateName: "daire", label: "Daire" }
    ]
  };

  render() {
    const { registerUser } = this.props;

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
        <ScrollView>
          <Form style={{ marginTop: "10%" }}>
            {this.state.inputValues.map(inputProp => (
              <Item floatingLabel style={{ width: "90%" }}>
                <Label style={{ color: "#fff" }}>{inputProp.label}</Label>
                <Input
                  style={{ color: "#fff" }}
                  secureTextEntry={
                    inputProp.stateName == "password" ? true : false
                  }
                  onChangeText={text =>
                    this.setState({ [inputProp.stateName]: text })
                  }
                />
              </Item>
            ))}
          </Form>

          <Button
            bordered
            block
            light
            style={styles.button}
            onPress={() =>
              registerUser({
                authData: {
                  email: this.state.email,
                  password: this.state.password,
                  profile_id: ""
                },
                profileData: {
                  f_name: this.state.f_name,
                  l_name: this.state.l_name,
                  phone_number: this.state.phone_number,
                  parsel: this.state.parsel,
                  blok: this.state.blok,
                  daire: this.state.daire
                }
              })
            }
          >
            <Text light style={{ marginTop: "6%" }}>
              Kayıt Ol
            </Text>
          </Button>
        </ScrollView>
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
  { registerUser }
)(RegisterUser);
