import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import * as f from "firebase";

export default class Login extends Component {
  async componentDidMount() {
    // f.auth().signInWithEmailAndPassword("test@test.com", "alihaider");
    const SaveData = await AsyncStorage.setItem(
      "user",
      JSON.stringify({ email: "test@test.com", password: "alihaider" })
    );
  }
  render() {
    return (
      <View>
        <Text> Login </Text>
      </View>
    );
  }
}
