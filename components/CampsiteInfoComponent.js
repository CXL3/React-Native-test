import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { Card, Icon } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { COMMENTS } from "../shared/comments";

// render Card

function RenderCampsite(props) {
  const { campsite } = props;

  if (campsite) {
    return (
      <Card featuredTitle={campsite.name} image={require("./images/bmw2.jpg")}>
        <Text style={{ margin: 10 }}>{campsite.description}</Text>
        <Icon
        //name='heart-o' 
        // use tenary operator , if favorite is true, solid heart, if not outline version
          name={props.favorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          // subtle color shadow effect
          raised
          //reverse the color scheme
          reverse
          onPress={() =>
            props.favorite
              ? console.log("Already set as a favorite")
              : props.markFavorite()
          }
        />
      </Card>
    );
  }
  return <View />;
}

// render FlatList
function RenderComments({ comments }) {
  const renderCommentItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text
          style={{ fontSize: 12 }}
        >{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    );
  };

  return (
    <Card title="Comments">
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
}
class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      favorite: false,
    };
  }
  //Set the tile of the screen
  static navigationOptions = {
    title: "Campsite Information",
  };

  // event handlers to toggle the favorite property to true
  markFavorite() {
    this.setState({ favorite: true });
  }
  render() {
    // accessed the id that was clicked on the directory component
    const campsiteId = this.props.navigation.getParam("campsiteId");
    // getting that array under the id clicked
    const campsite = this.state.campsites.filter(
      (campsite) => campsite.id === campsiteId
    )[0];
    // Get all the comments under that id
    const comments = this.state.comments.filter(
      (comment) => comment.campsiteId === campsiteId
    );
    return (
      <ScrollView>
        <RenderCampsite
          campsite={campsite}
          //pass in the favorite property and event handler in
          favorite={this.state.favorite}
          markFavorite={() => this.markFavorite()}
        />
        <RenderComments comments={comments} />
      </ScrollView>
    );
  }
}

export default CampsiteInfo;
