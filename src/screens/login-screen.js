import React, { Component } from "react";
import {
  ImageBackground,
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Button, Text, DatePicker, Spinner } from "native-base";
import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { tryLogin } from "../state/authorization/action-creator";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
var logo = require("../../assets/download.jpg");
export class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      isMounted: false,
      membershipId: "",
      mobileNumber: "",
      dateOfBirth: ""
    };
  }
  onLogin() {
    this.props.tryLogin({
      membershipId: this.state.membershipId,
      mobileNumber: this.state.mobileNumber,
      dateOfBirth: this.state.dateOfBirth
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      debugger;
      this.props.navigation.navigate("Application");
    }
  }
  static mapStatetToProps(state: State) {
    return {
      isLoggedIn: state.authorization.isLoggedIn,
      loading: state.authorization.loading
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryLogin }, dispatch);
  }
  setDate(newDate) {
    this.setState({ dateOfBirth: newDate });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <TextInput
          value={this.state.membershipId}
          onChangeText={membershipId => this.setState({ membershipId })}
          placeholder={"Enter Your Membership ID"}
          placeholderTextColor="#ffffff"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          value={this.state.mobileNumber}
          onChangeText={mobileNumber => this.setState({ mobileNumber })}
          keyboardType="numeric"
          maxLength={11}
          placeholder={"Enter Your Mobile Number"}
          placeholderTextColor="#ffffff"
          style={styles.input}
        />
        <View
          style={{
            ...styles.input,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <DatePicker
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select Your Birth Date"
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{
              color: "#ffffff",
              fontSize: 15,
              paddingTop: 14
            }}
            onDateChange={this.setDate.bind(this)}
            disabled={false}
          />
        </View>
        {this.props.loading ? (
          <Spinner style={{ alignSelf: "center" }} color="#D0C21D" />
        ) : (
          <Button style={styles.button} onPress={this.onLogin.bind(this)}>
            <Text style={{ color: "#202945" }}>Login</Text>
          </Button>
        )}
      </View>
    );
  }
}
export const LoginScreen = connect(
  LoginContainer.mapStatetToProps,
  LoginContainer.mapDispatchToProps
)(LoginContainer);

const styles = StyleSheet.create({
  centerLogo: {
    width: wp("100%"),
    height: hp("22%"),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
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
