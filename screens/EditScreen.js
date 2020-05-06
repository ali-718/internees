import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as f from "firebase";
import { TextInput } from "react-native-gesture-handler";

export default class EditScreen extends Component {
  state = {
    Data: [],
    updateId: "",
    updateDetails: {},
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    f.database()
      .ref("users")
      .once("value")
      .then((res) => {
        // console.log(res.val());

        res.forEach((snapshot) => {
          // console.log(snapshot.val());
          // console.log(snapshot.key);

          let Data = { id: snapshot.key, ...snapshot.val() };

          this.setState({
            Data: [...this.state.Data, Data],
          });

          // console.log(Data);
        });
      });
  };

  Delete = (id) => {
    f.database()
      .ref("users")
      .child(id)
      .remove()
      .then(() => {
        this.setState({
          Data: [],
        });
      })
      .then(() => {
        this.fetchUsers();
      });
  };

  onUpdateClick = (id, name, age) => {
    this.setState({
      updateId: id,
      updateDetails: { Name: name, age: age },
    });
  };

  Update = (id) => {
    f.database()
      .ref("users")
      .child(id)
      .update(this.state.updateDetails)
      .then(() => {
        this.setState({
          Data: [],
          updateId: "",
          updateDetails: {},
        });
      })
      .then(() => {
        this.fetchUsers();
      });
  };

  render() {
    return (
      <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
        {this.state.Data.map((item) => (
          <View
            style={{
              width: "90%",
              alignItems: "center",
              marginTop: 30,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "black",
              padding: 20,
              backgroundColor: "white",
            }}
          >
            {console.log(this.state.updateDetails)}
            {this.state.updateId == item.id ? (
              <View style={{ width: "100%", alignItems: "center" }}>
                <TextInput
                  style={{
                    width: "90%",
                    height: 30,
                    paddingLeft: 10,
                    borderColor: "black",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  onChangeText={(value) => {
                    this.setState({
                      updateDetails: {
                        ...this.state.updateDetails,
                        Name: value,
                      },
                    });
                  }}
                  value={this.state.updateDetails.Name}
                />
                <TextInput
                  style={{
                    width: "90%",
                    height: 30,
                    paddingLeft: 10,
                    borderColor: "black",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  onChangeText={(value) => {
                    this.setState({
                      updateDetails: {
                        ...this.state.updateDetails,
                        age: value,
                      },
                    });
                  }}
                  value={this.state.updateDetails.age.toString()}
                />
              </View>
            ) : (
              <View>
                <Text>Name:- {item.Name}</Text>
                <Text>Age:- {item.age}</Text>
              </View>
            )}
            {this.state.updateId == item.id ? (
              <TouchableOpacity
                onPress={() => this.Update(item.id)}
                style={{
                  width: 100,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "tomato",
                  borderRadius: 20,
                  marginTop: 20,
                }}
              >
                <Text style={{ color: "white" }}>Update</Text>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              onPress={() => this.onUpdateClick(item.id, item.Name, item.age)}
              style={{
                width: 100,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "green",
                borderRadius: 20,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white" }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.Delete(item.id)}
              style={{
                width: 100,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                borderRadius: 20,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}
