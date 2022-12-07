import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import VehicleCard from "../components/homeScreen/VehicleCard";
import CheckupCard from "../components/homeScreen/CheckupCard";
import RecommandProductCard from "../components/homeScreen/RecommandProductCard";
import { Button } from "@aws-amplify/ui-react-native/dist/primitives";
// import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="mx-4 mt-10">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-2xl font-bold ">Your Vehicle </Text>
        <VehicleCard navigation={navigation} />
        <Text className="text-xl pt-6 font-bold ">Quick Checkup </Text>
        <CheckupCard />
        <View className="flex flex-row justify-between">
          <Text className="text-xl pt-6 font-bold ">Recommanded Product </Text>
          <Button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick
          >
            View More
          </Button>
        </View>
        <RecommandProductCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
