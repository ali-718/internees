import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import * as f from "firebase";

export default class splashscreen extends Component {
  async componentDidMount() {
    // f.auth().onAuthStateChanged((user) => {
    const user = await AsyncStorage.getItem("user");
    const JsonData = JSON.parse(user);
    console.log(JsonData.email);
    console.log(JsonData.password);
    // if (user) {
    //   this.props.navigation.navigate("Home");
    // } else {
    //   this.props.navigation.navigate("Login");
    // }
    // });
  }

  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Splashscreen</Text>
      </View>
    );
  }
}
