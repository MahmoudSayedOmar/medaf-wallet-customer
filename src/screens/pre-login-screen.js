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
import { tryPreLogin, contBalanceUpdate } from "../state";
import signalr from "react-native-signalr";
var logo = require("../../assets/download.jpg");
export class PreLoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      isMounted: false
    };
  }
  onPreLogin() {
    this.props.tryPreLogin();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPreLoggedIn) {
      this.props.navigation.reset({
        routes: [{ name: "Login" }]
      });
    }
  }
  static mapStatetToProps(state: State) {
    return {
      isPreLoggedIn: state.authorization.isPreLoggedIn,
      loading: state.authorization.loading
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryPreLogin }, dispatch);
  }
  setDate(newDate) {
    this.setState({ dateOfBirth: newDate });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
          <Button style={styles.button} onPress={this.onPreLogin.bind(this)}>
            <Text style={{ color: "#202945" }}>Start</Text>
          </Button>
        </View>
      </View>
    );
  }
}
export const PreLoginScreen = connect(
  PreLoginContainer.mapStatetToProps,
  PreLoginContainer.mapDispatchToProps
)(PreLoginContainer);

const styles = StyleSheet.create({
  centerLogo: {
    width: wp("100%"),
    height: hp("35%"),
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
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: "#202945",
    borderRadius: 20,
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
    width: "auto",
    padding: 10,
    paddingTop: 5,
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",
    borderColor: "#202945",
    borderWidth: 1,
    marginTop: 30,
    alignSelf: "center"
  }
});
