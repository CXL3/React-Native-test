import React, { Component } from "react";
import Flexbox from "./FlexboxComponent";
import Home from "./Flatlist";
import Style from "./StyleSheet";
import Constants from "expo-constants";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);
const StyleNavigator = createStackNavigator(
  {
    Home: { screen: Style },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const FlexboxNavigator = createStackNavigator(
  {
    Flexbox: { screen: Flexbox },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#00000",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const MainDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Flexbox: { screen: FlexboxNavigator },
    Style: { screen: Style },
  },
  {
    drawerBackgroundColor: "#fffff",
  }
);

const AppNavigator = createAppContainer(MainDrawerNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default Main;
