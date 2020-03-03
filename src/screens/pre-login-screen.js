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
import { tryPreLogin } from "../state/authorization/action-creator";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
      debugger;
      this.props.navigation.navigate("Login");
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
        <Button
          rounded
          style={styles.button}
          onPress={this.onPreLogin.bind(this)}
        >
          <Text>Start</Text>
        </Button>
      </View>
    );
  }
}
export const PreLoginScreen = connect(
  PreLoginContainer.mapStatetToProps,
  PreLoginContainer.mapDispatchToProps
)(PreLoginContainer);

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
