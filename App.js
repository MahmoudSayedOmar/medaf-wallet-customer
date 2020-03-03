import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./src/screens/login-screen";
import { PreLoginScreen } from "./src/screens/pre-login-screen";
import { ApplicationScreen } from "./src/screens/application-screen";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./src/state";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import thunk from "redux-thunk";

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    const store = compose(applyMiddleware(thunk))(createStore)(reducer);

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="PreLogin" headerMode="none">
            <Stack.Screen name="PreLogin" component={PreLoginScreen} />

            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Application" component={ApplicationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}