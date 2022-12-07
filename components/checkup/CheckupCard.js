import { View, Text } from "react-native";
import React from "react";

const CheckupCard = ({ title, start_date, estimate_date }) => {
  return (
    <View className="bg-gray-200 rounded-lg h-32 my-3">
      <View className="flex flex-row">
        <View className="w-2/6 flex justify-center items-center h-32">
          <Text className="font-bold text-4xl ">0%</Text>
        </View>
        <View className="p-4">
          <Text className="font-bold text-lg">{title}</Text>
          <View>
            <Text className="pt-2">start date : {start_date}</Text>
            <Text className="pt-2">Estimate date : {estimate_date} </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckupCard;
