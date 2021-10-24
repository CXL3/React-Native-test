import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";

function RenderItem({ item }) {
  if (item) {
    return (
      <Card featuredTitle={item.name} image={require("./images/bmw3.jpg")}>
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      promotions: PROMOTIONS,
      partners: PARTNERS,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        {/* We'll take data from state then ,
        filter it to find the data with the featured flag
         then we'll get the first item in the array return from the filter */}
        <RenderItem
          item={this.state.campsites.filter((campsite) => campsite.featured)[0]}
        />
        <RenderItem
          item={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
        />
        <RenderItem
          item={this.state.partners.filter((partner) => partner.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default Home;
