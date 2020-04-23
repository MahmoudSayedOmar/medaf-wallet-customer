import React, { Component } from "react";
import { LinearGradient } from "expo";

import { styles } from "./first-login-form-styles";
import { Image, TextInput } from "react-native";

import { Form, View, Text, Spinner, Button, Icon } from "native-base";
var logo = require("../../../assets/download.jpg");
export class FirstLoginForm extends Component {
  constructor() {
    super();
    this.state = {
      oldPassword: "",
      password: "",
      retypePassword: "",
      showPassword: true,
      showOldPassword: true,
    };
  }

  props: {
    isLoggedIn: boolean,
    loading: boolean,
    errorMessage: string,
    navigation: any,
    tryLogin: (UserLoginModel) => void,
  };

  login() {
    this.props.tryLogin(this.state);
  }
  toggleSwitch(whichPassword) {
    this.setState({
      [whichPassword]: !this.state[whichPassword],
    });
  }

  render() {
    let loadingSpinner = this.props.loading ? (
      <Spinner color="#ef9c05" />
    ) : (
      <View style={styles.loginContainer}>
        {this.props.loginFail ? (
          <Text style={{ color: "red", alignSelf: "center" }}>
            Check your Email or Password
          </Text>
        ) : null}
        <Button
          style={styles.button}
          onPress={() => {
            this.props.tryLogin(this.state);
          }}
        >
          <Text style={{ color: "#202945" }}>Change Password</Text>
        </Button>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>

        <Form>
          <View style={styles.passwordContainer}>
            <TextInput
              value={this.state.oldPassword}
              onChangeText={(txt) => {
                this.setState({ password: txt });
              }}
              secureTextEntry={this.state.showOldPassword}
              onChangeText={(oldPassword) => this.setState({ oldPassword })}
              placeholder={"Enter your old password"}
              placeholderTextColor="#D0C21D"
              style={{ flex: 1, color: "#D0C21D" }}
            />
            <Icon
              name={this.state.showOldPassword ? "eye-off" : "eye"}
              onPress={() => this.toggleSwitch("showOldPassword")}
              style={styles.showHideIcon}
            />
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              value={this.state.password}
              onChangeText={(txt) => {
                this.setState({ password: txt });
              }}
              secureTextEntry={this.state.showPassword}
              onChangeText={(password) => this.setState({ password })}
              placeholder={"Enter your new password"}
              placeholderTextColor="#D0C21D"
              style={{ flex: 1, color: "#D0C21D" }}
            />
            <Icon
              name={this.state.showPassword ? "eye-off" : "eye"}
              onPress={() => this.toggleSwitch("showPassword")}
              style={styles.showHideIcon}
            />
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              value={this.state.retypePassword}
              onChangeText={(txt) => {
                this.setState({ retypePassword: txt });
              }}
              secureTextEntry={this.state.showPassword}
              onChangeText={(retypePassword) =>
                this.setState({ retypePassword })
              }
              placeholder={"Re-Enter your new password"}
              placeholderTextColor="#D0C21D"
              style={{ flex: 1, color: "#D0C21D" }}
            />
            <Icon
              name={this.state.showPassword ? "eye-off" : "eye"}
              onPress={() => this.toggleSwitch("showPassword")}
              style={styles.showHideIcon}
            />
          </View>
          {loadingSpinner}
        </Form>
      </View>
    );
  }
}
