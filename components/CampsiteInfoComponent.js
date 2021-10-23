import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from '../shared/campsites';

function RenderCampsite({ campsite }) {
  if (campsite) {
    return (
      <Card featuredTitle={campsite.name} image={require("./images/bmw2.jpg")}>
        <Text style={{ margin: 10 }}>{campsite.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class CampsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }
    //Set the tile of the screen
    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        // accessed the id that was clicked on the directory component
        const campsiteId = this.props.navigation.getParam('campsiteId');
        // getting that array under the id clicked
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        return <RenderCampsite campsite={campsite} />;
    }
}

export default CampsiteInfo;