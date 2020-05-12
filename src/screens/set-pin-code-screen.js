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
      setPinCodeErrorMsg: state.userInfo.setPinCodeErrorMsg,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ trySetPinCode }, dispatch);
  }

  render() {
    let loadingSpinner = this.props.loading ? (
      <Spinner style={{ alignSelf: "center" }} color="#D0C21D" />
    ) : (
      <View
        style={{
          shadowOpacity: 0.25,
          shadowRadius: 5,
          shadowColor: "black",
          shadowOffset: { height: 0, width: 0 },
          paddingTop: 20,
        }}
      >
        {this.props.setPinCodeStatus === -1 ? (
          <Text style={{ color: "red", alignSelf: "center" }}>
            {this.props.setPinCodeErrorMsg}
          </Text>
        ) : null}
        <Button style={styles.button} onPress={this.onSetPinCode.bind(this)}>
          <Text style={{ color: "#202945" }}>Confirm</Text>
        </Button>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <View style={styles.eachRowAccount}>
          <Text style={styles.inputTitleText}>Confirmation Code</Text>
        </View>
        <TextInput
          value={this.state.confirmationCode}
          onChangeText={(confirmationCode) =>
            this.setState({ confirmationCode })
          }
          placeholder={"Enter Your Confirmation Code"}
          placeholderTextColor="#202945"
          keyboardType="numeric"
          maxLength={6}
          style={styles.input}
        />
        <View style={styles.eachRowAccount}>
          <Text style={styles.inputTitleText}>New Pin Code</Text>
        </View>
        <TextInput
          value={this.state.newPinCode}
          onChangeText={(newPinCode) => this.setState({ newPinCode })}
          keyboardType="numeric"
          maxLength={5}
          placeholder={"Enter Your New Pin Code"}
          placeholderTextColor="#202945"
          style={styles.input}
        />
        <View style={styles.eachRowAccount}>
          <Text style={styles.inputTitleText}>New Pin Code Confirmation</Text>
        </View>
        <TextInput
          value={this.state.reNewPinCode}
          onChangeText={(reNewPinCode) => this.setState({ reNewPinCode })}
          keyboardType="numeric"
          maxLength={5}
          placeholder={"Confirm Your New Pin Code"}
          placeholderTextColor="#202945"
          style={styles.input}
        />

        {loadingSpinner}
      </View>
    );
  }
}
export const PinCodeScreen = connect(
  PinCodeContainer.mapStatetToProps,
  PinCodeContainer.mapDispatchToProps
)(PinCodeContainer);

const styles = StyleSheet.create({
  eachRowAccount: {
    flexDirection: "row",

    textAlign: "left",
    marginLeft: 13,
    marginBottom: 3,
  },
  inputTitleText: {
    fontSize: 14,
  },
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
    textAlign: "left",
    height: 35,
    width: "94%",

    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    color: "#202945",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "3%",
    paddingLeft: 5,
    paddingRight: 5,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  button: {
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
    marginBottom: 10,
    alignSelf: "center",
    padding: 10,
    paddingTop: 4,
  },
});
