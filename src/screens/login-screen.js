import React, { Component } from "react";
import {
  ImageBackground,
  Alert,
  TextInput,
  View,
  StyleSheet
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Button, Text, DatePicker, Spinner } from "native-base";
import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { tryLogin } from "../state/authorization/action-creator";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
        <TextInput
          value={this.state.membershipId}
          onChangeText={membershipId => this.setState({ membershipId })}
          placeholder={"Enter Your Membership ID"}
          style={styles.input}
        />
        <TextInput
          value={this.state.mobileNumber}
          onChangeText={mobileNumber => this.setState({ mobileNumber })}
          placeholder={"Enter Your Mobile Number"}
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
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate.bind(this)}
            disabled={false}
          />
        </View>
        {this.props.loading ? (
          <Spinner style={{ alignSelf: "center" }} color="#60b4c2" />
        ) : (
          <Button
            rounded
            style={styles.button}
            onPress={this.onLogin.bind(this)}
          >
            <Text>Login</Text>
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
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f99c05"
  },
  input: {
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "#60b4c2",
    shadowColor: "#3cc2cf",
    marginLeft: 5,
    alignSelf: "center"
  }
});
