import React, { Component } from "react";
// import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
// import Reservation from "./Form";
import Constants from "expo-constants";
import {
  View,
  Platform,
  StyleSheet,
  // Text,
  // ScrollView,
  // Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
// import { createAppContainer } from "react-navigation";
// import { Icon } from "react-native-elements";
// import SafeAreaView from "react-native-safe-area-view";

const Stack = createStackNavigator();

const Main = () => (
  <Stack.Navigator>
    <Stack.Screen name="Directory" component={Directory} />
    <Stack.Screen name="CampsiteInfo" component={CampsiteInfo} />
  </Stack.Navigator>
);

//Stack navigator
// const DirectoryNavigator = createStackNavigator(
//   {
//     Directory: {
//       screen: Directory,
//       //add list icon on the directory page
//       navigationOptions: ({ navigation }) => ({
//         headerLeft: (
//           <Icon
//             name="list"
//             type="font-awesome"
//             iconStyle={styles.stackIcon}
//             onPress={() => navigation.toggleDrawer()}
//           />
//         ),
//       }),
//     },
//     CampsiteInfo: { screen: CampsiteInfo },
//   },
//   {
//     initialRouteName: "Directory",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "#000000",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//     },
//   }
// );

// const HomeNavigator = createStackNavigator(
//   {
//     Home: { screen: Home },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: "#000000",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//       headerLeft: (
//         <Icon
//           name="home"
//           type="font-awesome"
//           iconStyle={styles.stackIcon}
//           onPress={() => navigation.toggleDrawer()}
//         />
//       ),
//     }),
//   }
// );
// const ReservationNavigator = createStackNavigator(
//   {
//     Reservation: { screen: Reservation },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: "#5637DD",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//       headerLeft: (
//         <Icon
//           name="tree"
//           type="font-awesome"
//           iconStyle={styles.stackIcon}
//           onPress={() => navigation.toggleDrawer()}
//         />
//       ),
//     }),
//   }
// );

// const CustomDrawerContentComponent = (props) => (
//   <ScrollView>
//     <SafeAreaView
//       style={styles.container}
//       forceInset={{ top: "always", horizontal: "never" }}
//     >
//       <View style={styles.drawerHeader}>
//         <View style={{ flex: 1 }}>
//           <Image
//             source={require("./images/bmw1.jpg")}
//             style={styles.drawerImage}
//           />
//         </View>
//         <View style={{ flex: 2 }}>
//           <Text style={styles.drawerHeaderText}>BMW</Text>
//         </View>
//       </View>
//       <DrawerItems {...props} />
//     </SafeAreaView>
//   </ScrollView>
// );
// //Drawer navigator
// const MainNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeNavigator,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => (
//           <Icon name="home" type="font-awesome" size={24} color={tintColor} />
//         ),
//       },
//     },
//     Directory: {
//       screen: DirectoryNavigator,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => (
//           <Icon name="list" type="font-awesome" size={24} color={tintColor} />
//         ),
//       },
//     },
//     Reservation: {
//       screen: ReservationNavigator,
//       navigationOptions: {
//         drawerLabel: "Buy one today!",
//         drawerIcon: ({ tintColor }) => (
//           <Icon name="tree" type="font-awesome" size={24} color={tintColor} />
//         ),
//       },
//     },
//   },
//   {
//     drawerBackgroundColor: "#ffffff",
//     contentComponent: CustomDrawerContentComponent,
//   }
// );

// // const AppNavigator = createAppContainer(DirectoryNavigator);
// const AppNavigator = createAppContainer(MainNavigator);

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#fff",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
