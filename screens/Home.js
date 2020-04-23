import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import axios from "axios";

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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ",
    },
    {
      Name: "Black Chick",
      Price: 3000,
      Image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/25/animal-1867521_960_720.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ",
    },
    {
      Name: "White Chick",
      Price: 8000,
      Image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/25/animal-1867521_960_720.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ",
    },
    {
      Name: "Red Chick",
      Price: 7000,
      Image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/25/animal-1867521_960_720.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ",
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
    Comments: [],
    isLoading: true,
  };

  componentDidMount() {
    console.disableYellowBox = true;

    axios
      .get("https://my-json-server.typicode.com/typicode/demo/db")
      .then((res) => {
        console.log(res.data);
        this.setState({
          Comments: res.data.comments,
          isLoading: false,
        });
      });

    //axios.get("http://192.168.2.106:3030/api/getUser")

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

        {this.state.isLoading ? (
          <ActivityIndicator style={{ marginTop: 20 }} size="large" />
        ) : (
          this.state.Comments.map((item) => (
            <View style={{ margin: 20 }}>
              <Text>id: {item.id}</Text>
              <Text>body: {item.body}</Text>
            </View>
          ))
        )}
      </ScrollView>
    );
  }
}
