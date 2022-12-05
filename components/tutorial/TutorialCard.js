import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import TutorialImg from "../../assets/tutorial.jpg";

const TutorialCard = () => {
  return (
    <TouchableOpacity className="mx-4 mt-4 p-3 bg-gray-200 rounded-md h-41">
      <View className="flex flex-row">
        <View className="w-1/2 p-1 rounded-lg ">
          <Image source={TutorialImg} className="h-36 w-full rounded-lg" />
        </View>
        <View className="w-1/2 p-1">
          <Text className="font-bold ">How to change tire ?</Text>
          <Text className="text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ab
            doloremque cumque voluptatem culpa repellat quia quam suscipit l.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TutorialCard;
