import React, { Component } from "react";
import { Text, View } from "react-native";

class Flexbox extends Component {
  static navigationOptions = {
    title: "Flexbox",
  };
  render() {
    return (
      <View>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </View>
    );
  }
}

export default Flexbox;
