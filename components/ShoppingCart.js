import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import store from "../reducers/store";
import { CHANGE_COMPONENT_STATE } from "../actions/types";
import { Content, Right, Left, Body, Container, Header } from "native-base";

class ShoppingCart extends Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.cart}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <TouchableHighlight
              onPress={() =>
                store.dispatch({
                  type: CHANGE_COMPONENT_STATE,
                  payload: { component: "cart", state: false }
                })
              }
            >
              <Text>Kapat</Text>
            </TouchableHighlight>

            <View style={{ width: "100%", height: "97%" }}>
              <Text
                style={{
                  textAlign: "center",
                  marginBottom: 8,
                  fontFamily: "Montserrat-Bold"
                }}
              >
                Alışveriş Sepeti
              </Text>
              <Content
                padder
                style={{
                  borderTopColor: "black",
                  borderTopWidth: 1,
                  borderBottomColor: "black",
                  borderBottomWidth: 1
                }}
              >
                <Text>Servis</Text>
              </Content>
              <Header noLeft noShadow style={{ backgroundColor: "black" }}>
                <Text
                  style={{
                    paddingTop: 20,
                    fontFamily: "Montserrat-Bold",
                    width: "60%",
                    color: "white"
                  }}
                >
                  {`Toplam Tutar : ${"20TL"}`}
                </Text>
                <Right>
                  <TouchableHighlight>
                    <Text style={{ textAlign: "right", fontFamily: "Montserrat-Bold", color: "white"}}>Sepeti Onayla</Text>
                  </TouchableHighlight>
                </Right>
              </Header>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.component.cart
  };
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  loaderContainer: {
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    position: "absolute",
    left: "23%",
    top: "20%",
    marginLeft: -45,
    marginTop: -45
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15
  }
});

export default connect(
  mapStateToProps,
  null
)(ShoppingCart);
