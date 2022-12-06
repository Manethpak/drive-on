import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CheckupCard = ({ title, start_date, estimate_date }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 5,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Checkup")}
        className="flex flex-row "
        style={{ height: 200 }}
      >
        <View
          style={{ width: 200 }}
          className="bg-white mt-6 ml-3 py-2 px-1 rounded-md flex flex-col items-center"
        >
          <Text className="w-fit font-bold text-3xl py-8">0%</Text>
          <Text className="w-fit font-bold text-xl">{title}</Text>
          <Text className="w-fit text-xs">Estimate day : {estimate_date}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CheckupCard;
