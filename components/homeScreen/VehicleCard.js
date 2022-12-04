import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Tesla from "../../assets/tesla.png";

const VehicleCard = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <View className="bg-gray-200 mt-6 py-2 px-3 rounded-md  flex flex-row items-center">
      <View
        className="flex justify-center"
        style={{
          width: "50%",
          height: 150,
        }}
      >
        <Image
          source={Tesla}
          style={{
            width: "80%",
            height: "50%",
          }}
        ></Image>
      </View>
      <View classNamw="w-1/2 flex">
        <View>
          <Text className="text-sm">Model : Tesla Model 3 </Text>
          <Text className="text-sm">Released date : July 2017</Text>
          <Text className="text-sm">Vehicle : Electirc Vehicle</Text>
        </View>
        <View className="flex justify-end items-end">
          <TouchableOpacity
            className="mt-10 bg-blue-500 rounded-md"
            style={{
              width: 110,
            }}
          >
            <Text className="text-center px-2 font-bold text-white py-1">
              View More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VehicleCard;
