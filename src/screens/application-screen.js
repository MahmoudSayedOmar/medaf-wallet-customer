import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "./home-screen";

import { ChangePinCodeScreen } from "./change-pin-code";
import { History } from "./history-screen";
import { Transfer } from "./transfer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
var logo = require("../../assets/download.jpg");

function ChangePasswordScreen() {
  return <ChangePinCodeScreen />;
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="Change Password"
        component={ChangePasswordScreen}
      />
    </SettingsStack.Navigator>
  );
}

const HistoryStack = createStackNavigator();
function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={HistoryScreen} />
    </HistoryStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
const TransferStack = createStackNavigator();
function TransferStackScreen() {
  return (
    <TransferStack.Navigator>
      <TransferStack.Screen name="Transfer" component={TransferScreen} />
    </TransferStack.Navigator>
  );
}
TransferStackScreen;
function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.centerLogo}>
        <Image source={logo} style={{ width: 150 }} />
      </View>
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Change Password")}
      >
        <Text style={{ color: "#202945" }}>Change Pin</Text>
      </Button>
    </View>
  );
}

function HistoryScreen({ navigation }) {
  return <History />;
}
function TransferScreen({ navigation }) {
  return <Transfer />;
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
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Transfer") {
              iconName = focused ? "ios-swap" : "ios-swap";
            } else if (route.name === "History") {
              iconName = focused ? "md-clock" : "md-clock";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: "#D0C21D",
          inactiveTintColor: "gray"
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Transfer" component={TransferStackScreen} />
        <Tab.Screen name="History" component={HistoryStackScreen} />
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
    width: wp("75%"),
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",

    borderColor: "#202945",
    borderWidth: 2,

    height: 35,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center"
  }
});
