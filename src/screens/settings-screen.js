import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Button } from "native-base";

import { Dispatch, bindActionCreators } from "redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
var logo = require("../../assets/download.jpg");

export class SettingsContainer extends Component {
  constructor() {
    super();
  }
  static mapStatetToProps(state: State) {
    return {};
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({}, dispatch);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <Button
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate("Change Pin")}
        >
          <Text style={{ color: "#202945" }}>Change Pin</Text>
        </Button>
      </View>
    );
  }
}
export const SettingsScreen = connect(
  SettingsContainer.mapStatetToProps,
  SettingsContainer.mapDispatchToProps
)(SettingsContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF"
  },
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%"
  },
  buttonStyle: {
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",

    borderColor: "#202945",
    borderWidth: 1,

    height: 31,
    marginTop: 10,
    padding: 10,
    alignSelf: "center"
  }
});
