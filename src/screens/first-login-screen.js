import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";

import { FirstLoginForm } from "../components";

import { State, tryFirstLogin } from "../state";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
class firstloginContainer extends Component {
  constructor() {
    super();
    this.state = {
      isMounted: false,
    };
  }
  static navigationOptions = {
    header: null,
  };
  static navigatorStyle = { navBarHidden: true };
  static mapStatetToProps(state: State) {
    return {
      havePinCode: state.authorization.havePinCode,
      firstLogIn: state.authorization.firstLogIn,
      loginError: state.authorization.firstLoginErrorMessage,
      loading: state.authorization.loading,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryFirstLogin }, dispatch);
  }

  props: {
    loginError: string,
    loading: boolean,
    isLoggedIn: boolean,
    tryFirstLogin: (data) => void,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.firstLogIn == false) {
      if (nextProps.havePinCode) {
        this.props.navigation.reset({
          routes: [{ name: "Application" }],
        });
      } else {
        this.props.navigation.navigate("PinConfirmation");
      }
    }

    this.setState({ isMounted: !this.state.isMounted });
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          extraScrollHeight={100}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <FirstLoginForm
            loading={this.props.loading}
            tryFirstLogin={this.props.tryFirstLogin}
            errorMessage={this.props.loginError}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export const FirstLoginScreen = connect(
  firstloginContainer.mapStatetToProps,
  firstloginContainer.mapDispatchToProps
)(firstloginContainer);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
