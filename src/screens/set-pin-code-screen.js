import React, { Component } from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Button, Text, Spinner } from "native-base";
import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { trySetPinCode } from "../state";
var logo = require("../../assets/download.jpg");

export class PinCodeContainer extends Component {
  constructor() {
    super();
    this.state = {
      confirmationCode: "",
      newPinCode: "",
      reNewPinCode: "",
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.setPinCodeStatus == 1) {
      this.props.navigation.reset({
        routes: [{ name: "Application" }],
      });
    }
  }

  onSetPinCode() {
    this.props.trySetPinCode({
      confirmationCode: this.state.confirmationCode,
      newPinCode: this.state.newPinCode,
      reNewPinCode: this.state.reNewPinCode,
    });
  }

  static mapStatetToProps(state: State) {
    return {
      loading: state.userInfo.loading,
      setPinCodeStatus: state.userInfo.setPinCodeStatus,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ trySetPinCode }, dispatch);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <TextInput
          value={this.state.confirmationCode}
          onChangeText={(confirmationCode) =>
            this.setState({ confirmationCode })
          }
          placeholder={"Enter Your Confirmation Code"}
          placeholderTextColor="#ffffff"
          keyboardType="numeric"
          maxLength={6}
          style={styles.input}
        />
        <TextInput
          value={this.state.newPinCode}
          onChangeText={(newPinCode) => this.setState({ newPinCode })}
          keyboardType="numeric"
          maxLength={5}
          placeholder={"Enter Your New Pin Code"}
          placeholderTextColor="#ffffff"
          style={styles.input}
        />
        <TextInput
          value={this.state.reNewPinCode}
          onChangeText={(reNewPinCode) => this.setState({ reNewPinCode })}
          keyboardType="numeric"
          maxLength={5}
          placeholder={"Enter Your New Pin Code"}
          placeholderTextColor="#ffffff"
          style={styles.input}
        />

        {this.props.loading ? (
          <Spinner style={{ alignSelf: "center" }} color="#D0C21D" />
        ) : (
          <Button style={styles.button} onPress={this.onSetPinCode.bind(this)}>
            <Text style={{ color: "#202945" }}>Confirm</Text>
          </Button>
        )}
      </View>
    );
  }
}
export const PinCodeScreen = connect(
  PinCodeContainer.mapStatetToProps,
  PinCodeContainer.mapDispatchToProps
)(PinCodeContainer);

const styles = StyleSheet.create({
  centerLogo: {
    width: wp("100%"),
    height: hp("22%"),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  input: {
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#D0C21D",
    margin: 10,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    width: wp("35%"),
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",

    borderColor: "#202945",
    borderWidth: 2,
    paddingBottom: 5,
    height: 40,
    marginTop: 30,
    alignSelf: "center",
  },
});
