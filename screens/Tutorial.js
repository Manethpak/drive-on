import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Search from "../components/tutorial/Search";
import TutorialCard from "../components/tutorial/TutorialCard";

const Tutorial = () => {
  return (
    <SafeAreaView className="w-screen h-full flex ">
      <Search />
      <Text className="px-4 py-3 text-lg font-bold">Tutorial</Text>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <TutorialCard />
        <TutorialCard />
        <TutorialCard />
        <TutorialCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tutorial;
