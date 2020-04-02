import React, { Component } from "react";
import {
  ImageBackground,
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Button, Text, DatePicker, Spinner } from "native-base";
import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { tryLogin } from "../state/authorization/action-creator";

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
      if (nextProps.havePinCode) {
        this.props.navigation.reset({
          routes: [{ name: "Application" }]
        });
      } else {
        this.props.navigation.navigate("PinConfirmation");
      }
    }
  }

  static mapStatetToProps(state: State) {
    return {
      isLoggedIn: state.authorization.isLoggedIn,
      loading: state.authorization.loading,
      havePinCode: state.authorization.havePinCode,
      errorMessage: state.authorization.errorMessage
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
          placeholderTextColor="#D0C21D"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          value={this.state.mobileNumber}
          onChangeText={mobileNumber => this.setState({ mobileNumber })}
          keyboardType="numeric"
          maxLength={11}
          placeholder={"Enter Your Mobile Number"}
          placeholderTextColor="#D0C21D"
          style={styles.input}
        />
        <View
          style={{
            ...styles.input,
            flexDirection: "row",
            paddingLeft: -5
          }}
        >
          <DatePicker
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Date of birth"
            textStyle={{ color: "#D0C21D" }}
            placeHolderTextStyle={{
              color: "#D0C21D",
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
          <View>
            <Text style={{ paddingLeft: 15, color: "red" }}>
              {this.props.errorMessage}
            </Text>

            <Button style={styles.button} onPress={this.onLogin.bind(this)}>
              <Text style={{ color: "#202945" }}>Login</Text>
            </Button>
          </View>
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
    paddingTop: "13%",
    backgroundColor: "#FFFFFF"
  },
  input: {
    textAlign: "left",
    paddingLeft: 8,
    height: 50,
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    color: "#D0C21D",

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
    width: "auto",
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",
    borderColor: "#202945",
    borderWidth: 1,
    marginTop: 10,
    alignSelf: "center",
    padding: 10,
    paddingTop: 5
  }
});
