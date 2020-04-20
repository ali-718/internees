import React, { Component } from "react";
import { Text, View } from "react-native";

export default class About extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => null,
      title: "My About Page",
    });
  }

  render() {
    return (
      <View>
        <Text> I am About </Text>
      </View>
    );
  }
}
