import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";

import { LoginForm } from "../components";

import { State, tryLogin } from "../state";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
class loginContainer extends Component {
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
      loginError: state.authorization.errorMessage,
      isLoggedIn: state.authorization.isLoggedIn,
      loading: state.authorization.loading,
      havePinCode: state.authorization.havePinCode,
      firstLogIn: state.authorization.firstLogIn,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryLogin }, dispatch);
  }

  props: {
    loginError: string,
    loading: boolean,
    isLoggedIn: boolean,
    tryLogin: (userModel: UserLoginModel) => void,
  };

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.isLoggedIn) {
      if (nextProps.firstLogIn == true) {
        this.props.navigation.navigate("FirstLogin");
      }
       else if (nextProps.havePinCode == false) {
        this.props.navigation.navigate("PinConfirmation");
      }
      else {
        this.props.navigation.reset({
          routes: [{ name: "Application" }],
        }); 
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
          <LoginForm
            loading={this.props.loading}
            tryLogin={this.props.tryLogin}
            errorMessage={this.props.loginError}
            isLoggedIn={this.props.isLoggedIn}
            navigation={this.props.navigation}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export const LoginScreen = connect(
  loginContainer.mapStatetToProps,
  loginContainer.mapDispatchToProps
)(loginContainer);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
