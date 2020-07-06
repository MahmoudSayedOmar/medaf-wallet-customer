import * as React from "react";
import { StyleSheet, Text, Icon } from "react-native";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "./home-screen";
import { ChangePinCodeScreen } from "./change-pin-code";
// import { Transfer } from "./transfer";
import { TransactionDetailsScreen } from "./transactionDetails-screen";
import { TransferScreen } from "./transfer";
// import { History } from "./history";
import { HistoryScreen } from "./history-screen";
import { SettingsScreen } from "./settings-screen";
import { SelectPaymentProviderScreen } from "./select-payment-provider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
var logo = require("../../assets/download.jpg");

const SettingsStack = createStackNavigator();
const HistoryStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    // headerMode="none"
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerStyle: { borderWidth: 1, borderBottomColor: "#D0C21D" },
          headerTintColor: "#D0C21D",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <SettingsStack.Screen
        headerMode="none"
        name="Change Pin"
        component={ChangePinCodeScreen}
        options={{
          title: "Change Pin",
          headerStyle: { borderWidth: 1, borderBottomColor: "#D0C21D" },
          headerTintColor: "#202945",
          headerBackTitle: "back",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#D0C21D",
          },
        }}
      />
    </SettingsStack.Navigator>
  );
}

function HistoryStackScreen() {
  return (
    // headerMode="none"
    <HistoryStack.Navigator initialRouteName="History">
      <HistoryStack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: "History",
          headerStyle: { borderWidth: 1, borderBottomColor: "#D0C21D" },
          headerTintColor: "#D0C21D",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <HistoryStack.Screen
        headerMode="none"
        name="TransactionDetails"
        component={TransactionDetailsScreen}
        options={{
          title: "Transaction Details",
          headerStyle: { borderWidth: 1, borderBottomColor: "#D0C21D" },
          headerTintColor: "#202945",
          headerBackTitle: "back",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#D0C21D",
          },
        }}
      />
    </HistoryStack.Navigator>
  );
}

function History({ navigation }) {
  return <HistoryScreen />;
}
function Transfer({ navigation }) {
  return <TransferScreen />;
}

const Tab = createBottomTabNavigator();
export default class ApplicationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
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
              case "Home":
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                break;
              case "Transfer":
                iconName = focused ? "ios-swap" : "ios-swap";
                break;
              case "History":
                iconName = focused ? "md-clock" : "md-clock";
                break;
              case "Settings":
                iconName = focused ? "ios-list-box" : "ios-list";
                break;
              case "Payment":
                iconName = focused ? "ios-paper" : "ios-paper";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#D0C21D",
          inactiveTintColor: "#fff",
          borderTopWidth: 0,

          tabStyle: {
            backgroundColor: "#202945",
            borderRightColor: "#D0C21D",
            borderRightWidth: 1,
            // borderTopWidth: 1,
            // borderTopColor: "red",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          listeners={{
            focus: (e) => {
              // Prevent default action
            },
          }}
        />
        <Tab.Screen name="Transfer" component={Transfer} />

        <Tab.Screen
          name="History"
          component={HistoryStackScreen}
          listeners={{
            focus: (e) => {
              // Prevent default action
            },
          }}
        />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Payment" component={SelectPaymentProviderScreen} />
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
    backgroundColor: "#FFFFFF",
  },
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
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
    alignSelf: "center",
  },
});
