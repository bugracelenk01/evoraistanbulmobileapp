//TODO: Create redux actions for this page and connect them.

import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  Image,
  View,
  Dimensions
} from "react-native";
import {
  Card,
  Container,
  Content,
  CardItem,
  Body,
  Text,
  Button
} from "native-base";
import { connect } from "react-redux";
import { Header } from "../components";
import { SliderBox } from "react-native-image-slider-box";
class ServicePage extends Component {
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
        <Header back={true} />
        <Content padder style={{ marginTop: "5%" }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 23,
              textAlign: "center",
              marginBottom: "5%",
              fontFamily: "Montserrat-Bold"
            }}
          >
            Service Name
          </Text>
          <SliderBox
            images={[
              "https://source.unsplash.com/1024x768/?nature",
              "https://source.unsplash.com/1024x768/?water",
              "https://source.unsplash.com/1024x768/?girl",
              "https://source.unsplash.com/1024x768/?tree"
            ]}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            parentWidth={(Dimensions.get("window").width * 94) / 100}
            circleLoop={true}
          />

          <Card>
            <CardItem>
              <Body>
                <Text
                  style={{ fontFamily: "Montserrat-Regular", fontSize: 17 }}
                >
                  Lorem ipsum doler Lorem ipsum doler Lorem ipsum doler Lorem
                  ipsum doler Lorem ipsum doler Lorem ipsum doler Lorem ipsum
                  doler Lorem ipsum doler Lorem ipsum doler Lorem ipsum doler{" "}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Button bordered block light style={{ marginTop: "5%" }}>
            <Text>Hizmeti Al</Text>
          </Button>
        </Content>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(
  mapStateToProps,
  null
)(ServicePage);

// export default ServicePage;
