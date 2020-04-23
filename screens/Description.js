import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default class Description extends Component {
  state = {
    Details: {},
  };

  componentDidMount() {
    const Data = this.props.route.params.data;

    this.setState({
      Details: Data,
    });

    this.props.navigation.setOptions({
      title: Data.Name,
    });
  }

  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: this.state.Details.Image }}
        />
        <Text style={{ fontSize: 22, fontWeight: "bold", margin: 10 }}>
          {this.state.Details.Name}
        </Text>
        <Text style={{ margin: 10 }}>{this.state.Details.Price}</Text>

        <Text style={{ margin: 10, marginTop: 20 }}>
          {this.state.Details.description}
        </Text>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            height: 40,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: "80%",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "tomato",
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}
          >
            <Text style={{ color: "white" }}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
