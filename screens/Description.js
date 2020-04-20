import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Description extends Component {
  state = {
    Details: {},
  };

  componentDidMount() {
    const Data = this.props.route.params.data;

    this.setState({
      Details: Data,
    });
  }

  render() {
    return (
      <View>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: this.state.Details.Image }}
        />
        <Text style={{ fontSize: 22, fontWeight: "bold", margin: 10 }}>
          {this.state.Details.Name}
        </Text>
        <Text style={{ margin: 10 }}>{this.state.Details.Price}</Text>
      </View>
    );
  }
}
