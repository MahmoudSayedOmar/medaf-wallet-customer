import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "./home-screen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button title="Go to Details" onPress={() => {}} />
    </View>
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transfer" component={SettingsScreen} />
        <Tab.Screen name="History" component={SettingsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }
}
export const ApplicationScreen = connect(
  ApplicationContainer.mapStatetToProps,
  ApplicationContainer.mapDispatchToProps
)(ApplicationContainer);
