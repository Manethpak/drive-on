import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import sanityClient, { urlFor } from "../../sanity";

const TutorialCard = ({
  id,
  title,
  img,
  short_description,
  content,
  published_at,
  author,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push("TutorialDetailScreen", {
          id,
          title,
          img,
          short_description,
          content,
          published_at,
          author,
          navigation,
        })
      }
      className="mx-4 mt-4 p-3 bg-gray-200 rounded-md h-41"
    >
      <View className="flex flex-row">
        <View className="w-1/2 p-1 rounded-lg ">
          <Image
            source={{ uri: urlFor(img).url() }}
            className="h-36 w-full rounded-lg"
          />
        </View>
        <View className="w-1/2 p-1">
          <Text className="font-bold ">{title}</Text>
          <Text className="text-xs">{short_description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TutorialCard;
