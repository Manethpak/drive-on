import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {

  return (
    <SafeAreaView>
      <Text className="flex justify-center items-center text-center">
        HomeScreen
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
