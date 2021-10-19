import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class Flexbox extends Component {
  static navigationOptions = {
    title: "Flexbox",
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.box1}>1</Text>
        <Text style={styles.box2}>2</Text>
        <Text style={styles.box3}>3</Text>
        <Text style={styles.box4}>4</Text>
      </View>
    );
  }
}

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection:"row",
    // flexDirection:"column",
    // justifyContent also can do flex-start, flex-end, space between, center, space-around
    justifyContent: 'center',
    alignItems: "flex-end",
    paddingTop:40,
    backgroundColor:'#ddd',
  },
  box1:{
    backgroundColor:'gold',
    padding:10,
    flex:2,
  },
  box2:{
    backgroundColor:'red',
    padding:20,
    flex:1,
  },
  box3:{
    backgroundColor:'blue',
    padding:30,
    flex:1,
  },
  box4:{
    backgroundColor:'green',
    padding:40,
    flex:1,
  }
})
