import React, { Component } from "react";
import { Text, View, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import About from "./screens/About";
import Description from "./screens/Description";
import "./config";
import EditScreen from "./screens/EditScreen";
import splashscreen from "./screens/splashscreen";
import Login from "./screens/Login";
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerRight: () => <Text>Right</Text>,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={splashscreen}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Desc" component={Description} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
