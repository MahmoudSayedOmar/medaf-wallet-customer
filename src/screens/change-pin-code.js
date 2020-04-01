import React, { Component } from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Button, Text, Spinner } from "native-base";
import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { tryChangePinCode } from "../state";
var logo = require("../../assets/download.jpg");

export class ChangePinCodeContainer extends Component {
  constructor() {
    super();
    this.state = {
      oldPinCode: "",
      newPinCode: "",
      reNewPinCode: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.changePinCodeStatus == 1) {
      debugger;
      this.props.navigation.navigate("Settings");
    }
  }

  onChangePinCode() {
    this.props.tryChangePinCode({
      oldPinCode: this.state.oldPinCode,
      newPinCode: this.state.newPinCode,
      reNewPinCode: this.state.reNewPinCode
    });
  }

  static mapStatetToProps(state: State) {
    return {
      loading: state.userInfo.loading,
      changePinCodeStatus: state.userInfo.changePinCodeStatus
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryChangePinCode }, dispatch);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <TextInput
          value={this.state.oldPinCode}
          onChangeText={oldPinCode => this.setState({ oldPinCode })}
          keyboardType="numeric"
          maxLength={5}
          placeholder={"Enter Your Old Pin Code"}
          placeholderTextColor="#ffffff"
          style={styles.input}
        />
        <TextInput
          value={this.state.newPinCode}
          onChangeText={newPinCode => this.setState({ newPinCode })}
          keyboardType="numeric"
          maxLength={5}
          placeholder={"Enter Your New Pin Code"}
          placeholderTextColor="#ffffff"
          style={styles.input}
        />
        <TextInput
          value={this.state.reNewPinCode}
          onChangeText={reNewPinCode => this.setState({ reNewPinCode })}
          keyboardType="numeric"
          maxLength={5}
          placeholder={"Re-Enter Your New Pin Code"}
          placeholderTextColor="#ffffff"
          style={styles.input}
        />
        {this.props.changePinCodeStatus == -1 ? (
          <Text style={{ alignSelf: "center" }} color="red">
            Worng Pin Code{" "}
          </Text>
        ) : null}
        {this.props.loading ? (
          <Spinner style={{ alignSelf: "center" }} color="#D0C21D" />
        ) : (
          <Button
            style={styles.button}
            onPress={this.onChangePinCode.bind(this)}
          >
            <Text style={{ color: "#202945" }}>Submit</Text>
          </Button>
        )}
      </View>
    );
  }
}
export const ChangePinCodeScreen = connect(
  ChangePinCodeContainer.mapStatetToProps,
  ChangePinCodeContainer.mapDispatchToProps
)(ChangePinCodeContainer);

const styles = StyleSheet.create({
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%"
  },
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF"
  },
  input: {
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#D0C21D",
    margin: 10
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
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
    alignSelf: "center"
  }
});
