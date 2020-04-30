import React, { Component } from "react";

import { styles } from "./login-form-styles";
import { Image, TextInput } from "react-native";

import { Form, View, Text, Spinner, Button, Icon } from "native-base";
var logo = require("../../../assets/download.jpg");
export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      showPassword: true,
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
    this.props.tryLogin({
      userName: this.state.userName,
      password: this.state.password,
    });
  }
  toggleSwitch() {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  render() {
    let loadingSpinner = this.props.loading ? (
      <Spinner color="#ef9c05" />
    ) : (
      <View style={styles.loginContainer}>
        {this.props.errorMessage != "" ? (
          <Text style={{ color: "red", alignSelf: "center" }}>
            {this.props.errorMessage}
          </Text>
        ) : null}
        <Button
          style={styles.button}
          onPress={() => {
            this.props.tryLogin(this.state);
          }}
        >
          <Text style={{ color: "#202945" }}>Login</Text>
        </Button>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>

        <Form>
          <TextInput
            value={this.state.userName}
            onChangeText={(txt) => {
              this.setState({ userName: txt });
            }}
            placeholder={"Enter your username"}
            placeholderTextColor="#D0C21D"
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              value={this.state.password}
              onChangeText={(txt) => {
                this.setState({ password: txt });
              }}
              secureTextEntry={this.state.showPassword}
              onChangeText={(password) => this.setState({ password })}
              placeholder={"Enter your password"}
              placeholderTextColor="#D0C21D"
              style={{ flex: 1, color: "#D0C21D" }}
            />
            <Icon
              name={this.state.showPassword ? "eye-off" : "eye"}
              onPress={() => this.toggleSwitch()}
              style={styles.showHideIcon}
            />
          </View>

          {loadingSpinner}
        </Form>
      </View>
    );
  }
}
