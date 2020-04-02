import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "./home-screen";

import { ChangePinCodeScreen } from "./change-pin-code";
import { HistoryScreen } from "./history-screen";
import { SettingsScreen } from "./settings-screen";

import { Transfer } from "./transfer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
var logo = require("../../assets/download.jpg");

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator initialRouteName="Settings" headerMode="none">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="Change Password"
        component={ChangePinCodeScreen}
      />
    </SettingsStack.Navigator>
  );
}

const TransferStack = createStackNavigator();
function TransferStackScreen() {
  return (
    <TransferStack.Navigator>
      <TransferStack.Screen name="Transfer" component={Transfer} />
    </TransferStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default class ApplicationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  static mapStatetToProps(state: State) {
    return {};
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({}, dispatch);
  }
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = null;
            switch (route.name) {
              case "Home": {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              }
              case "Transfer": {
                iconName = focused ? "ios-swap" : "ios-swap";
              }
              case "History": {
                iconName = focused ? "md-clock" : "md-clock";
              }
              case "Settings": {
                iconName = focused ? "ios-list-box" : "ios-list";
              }
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: "#D0C21D",
          inactiveTintColor: "gray"
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transfer" component={TransferStackScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    );
  }
}
export const ApplicationScreen = connect(
  ApplicationContainer.mapStatetToProps,
  ApplicationContainer.mapDispatchToProps
)(ApplicationContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF"
  },
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%"
  },
  buttonStyle: {
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",

    borderColor: "#202945",
    borderWidth: 1,

    height: 31,
    marginTop: 10,
    padding: 10,
    alignSelf: "center"
  }
});
