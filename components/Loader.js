import React, { Component } from "react";
import { View, Image, Modal, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Loader extends Component {
  render() {
    const { loading } = this.props;
    return (
      <Modal animationType={"fade"} transparent={true} visible={loading}>
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require("../resources/loading.gif")}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

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
    width: 90,
    height: 90,
    backgroundColor: "white",
    borderRadius: 15,
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: -45,
    marginTop: -45
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15
  }
});

function mapStateToProps(state) {
  return {
    loading: state.loading.loader
  };
}

export default connect(
  mapStateToProps,
  null
)(Loader);
