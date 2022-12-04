import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen";
import AnalyticScreen from "../AnalyticScreen";
import FindMechanic from "../FindMechanic";
import Checkup from "../Checkup";
import Tutorial from "../Tutorial";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "Home") {
            iconName = focused ? "home" : "home";
          } else if (rn === "AnalyticScreen") {
            iconName = focused ? "analytics" : "analytics";
          } else if (rn === "FindMechanic") {
            iconName = focused ? "build" : "build";
          } else if (rn === "Checkup") {
            iconName = focused ? "clipboard" : "clipboard";
          } else if (rn === "Tutorial") {
            iconName = focused ? "book" : "book";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AnalyticScreen" component={AnalyticScreen} />
      <Tab.Screen name="FindMechanic" component={FindMechanic} />
      <Tab.Screen name="Checkup" component={Checkup} />
      <Tab.Screen name="Tutorial" component={Tutorial} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    padding: 0,
    right: 16,
    left: 16,
    bottom: 20,
    height: 56,
    borderRadius: 15,
    borderTopColor: "transparent",
  },
});

export default TabNavigator;
