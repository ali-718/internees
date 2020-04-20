import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";

export default class Home extends Component {
  filter = [
    { label: "All", value: 0 },
    { label: "> 5000", value: 5000 },
    { label: "> 7000", value: 7000 },
  ];

  products = [
    {
      Name: "Golden Chick",
      Price: 5000,
      Image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/25/animal-1867521_960_720.jpg",
    },
    {
      Name: "Black Chick",
      Price: 3000,
      Image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/25/animal-1867521_960_720.jpg",
    },
    {
      Name: "White Chick",
      Price: 8000,
      Image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/25/animal-1867521_960_720.jpg",
    },
    {
      Name: "Red Chick",
      Price: 7000,
      Image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/25/animal-1867521_960_720.jpg",
    },
    {
      Name: "Yellow Chick",
      Price: 2000,
      Image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/25/animal-1867521_960_720.jpg",
    },
  ];

  state = {
    filterValue: 0,
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <View style={{ width: 100 }}>
          <Dropdown
            onChangeText={(val) => this.setState({ filterValue: val })}
            label="Filter"
            data={this.filter}
            dropdownOffset={{ top: 0 }}
            pickerStyle={{ marginTop: 100 }}
            value={this.state.filterValue}
          />
        </View>
      ),
    });
  }

  render() {
    return (
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <ScrollView
          horizontal
          pagingEnabled
          style={{ width: Dimensions.get("window").width }}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            style={{ width: Dimensions.get("window").width, height: 300 }}
            source={require("../assets/chick.jpg")}
          />
          <Image
            style={{ width: Dimensions.get("window").width, height: 300 }}
            source={require("../assets/city.jpg")}
          />
          <Image
            style={{ width: Dimensions.get("window").width, height: 300 }}
            source={require("../assets/basket.jpg")}
          />
        </ScrollView>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Products</Text>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          style={{ width: Dimensions.get("window").width }}
          showsHorizontalScrollIndicator={false}
        >
          {this.products.map((item) => {
            if (item.Price >= this.state.filterValue) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Desc", {
                      data: item,
                    })
                  }
                  style={{ width: 120, margin: 10 }}
                >
                  <Image
                    source={{ uri: item.Image }}
                    style={{ width: 100, height: 100 }}
                  />
                  <Text
                    style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}
                  >
                    {item.Name}
                  </Text>
                  <Text style={{ marginTop: 10 }}>Rs {item.Price}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      </ScrollView>
    );
  }
}
