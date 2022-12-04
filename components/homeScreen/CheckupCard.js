import { View, Text, ScrollView } from "react-native";
import React from "react";

const CheckupCard = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex flex-row " style={{ height: 200 }}>
        <View
          style={{ width: 200 }}
          className="bg-white mt-6 ml-3 py-2 px-1 rounded-md flex flex-col items-center"
        >
          <Text className="w-fit font-bold text-3xl py-8">65%</Text>
          <Text className="w-fit font-bold text-xl">Tire Health</Text>
          <Text className="w-fit text-xs">Estimate day : 10-March-2023</Text>
        </View>
        <View
          style={{ width: 200 }}
          className="bg-white mt-6 ml-3 py-2 px-1 rounded-md flex flex-col items-center"
        >
          <Text className="w-fit font-bold text-3xl py-8">25%</Text>
          <Text className="w-fit font-bold text-xl">Brake Health</Text>
          <Text className="w-fit text-xs">Estimate day : 10-March-2023</Text>
        </View>
        <View
          style={{ width: 200 }}
          className="bg-white mt-6 ml-3 py-2 px-1 rounded-md flex flex-col items-center"
        >
          <Text className="w-fit font-bold text-3xl py-8">15%</Text>
          <Text className="w-fit font-bold text-xl">Oil Health</Text>
          <Text className="w-fit text-xs">Estimate day : 10-March-2023</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckupCard;
