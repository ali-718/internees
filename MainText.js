import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default class MainText extends Component {
  state = {
    Name: "Ali",
    Age: this.props.AgeValue,
  };

  render() {
    return (
      <View style={{ width: "100%", alignItems: "center", marginTop: 50 }}>
        <Text style={{ fontSize: 25 }}>{this.props.heading}</Text>
        <TextInput
          placeholder="Name"
          style={{
            width: "80%",
            height: 40,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "black",
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 30,
          }}
          onChangeText={(val) => {
            this.setState({
              Name: val,
            });
          }}
          value={this.state.Name}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Age"
          style={{
            width: "80%",
            height: 40,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "black",
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 20,
          }}
          onChangeText={(val) => {
            this.setState({
              Age: val,
            });
          }}
          value={this.state.Age}
          placeholderTextColor="gray"
        />

        <Button
          title="press me"
          onPress={() => this.props.AddToArray(this.state)}
        />
      </View>
    );
  }
}
