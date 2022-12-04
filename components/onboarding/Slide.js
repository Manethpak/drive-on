import { View, Text, Image, Dimensions } from "react-native";
import React from "react";


const Slide = ({ item }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View className="flex w-screen">
      <View className="items-center mt-10">
        <Image
          className="px-40"
          source={item.image}
          style={{
            height: "75%",
            width,
            resizeMode: "contain",
          }}
        ></Image>
      </View>

      <Text className="text-2xl font-bold px-5">{item.title}</Text>
      <Text
        className="text-lg px-5 pt-2 text-gray-500"
        style={{
          width,
        }}
      >
        {item.subtitle}
      </Text>
      
    </View>
  );
};

export default Slide;
