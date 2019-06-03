import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Footer, FooterTab, Button, Text, Icon } from "native-base";
class CustomFooter extends Component {
  render() {
    if (
      Actions.currentScene === "login" ||
      Actions.currentScene === "register" ||
      Actions.currentScene === "forgotPassword"
    )
      return null;
    else
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={Actions.currentScene === "main" ? true : false}
              onPress={() => Actions.main()}
            >
              <Icon name="apps" />
              <Text>Anasayfa</Text>
            </Button>
            <Button
              vertical
              active={Actions.currentScene === "service" ? true : false}
              onPress={() => Actions.service()}
            >
              <Icon name="menu" />
              <Text>Servisler</Text>
            </Button>
            <Button
              vertical
              active={Actions.currentScene === "account" ? true : false}
              onPress={() => Actions.account()}
            >
              <Icon active name="contact" />
              <Text>Hesap</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
  }
}
export default CustomFooter;
