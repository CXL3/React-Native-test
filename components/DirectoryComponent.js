import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
//Flatlist and ListItem
class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }
  //configure the text for that title, static: sets a method on the class itself rather than the object that is instantiated from the class
  static navigationOptions = {
    title: "Directory",
  };

  render() {
    // Navigation prop Navigate- got to another screen, 
    // figures out the action it needs to take to do it.  
    // https://reactnavigation.org/docs/4.x/navigation-prop/
    const { navigate } = this.props.navigation;

    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          // onPress ={() => props.onPress(item.id)} updated because it was calling the onSelectedCampsite method which is deleted.
          // Two arguments : One is the name of the screen to navigate to, second arg adds extra parameters to the route( item Id that i clicked)
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          leftAvatar={{ source: require("./images/bmw1.jpg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
