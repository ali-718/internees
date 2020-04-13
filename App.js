import React, { Component } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text>A</Text>
          </View>
          <View
            style={{
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text style={{ fontSize: 22 }}>My App</Text>
          </View>
          <View
            style={{
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text>A</Text>
          </View>
        </View>

        <Text>Hello guys i am ali</Text>
        <Button title="press me" />
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "red",
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Ali</Text>
        </View>
      </SafeAreaView>
    );
  }
}
