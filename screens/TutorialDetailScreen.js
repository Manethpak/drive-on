import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import sanityClient, { urlFor } from "../sanity";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import moment from "moment";

const TutorialDetailScreen = () => {
  const navigation = useNavigation();
  const [tutorial, setTutorial] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const {
    params: {
      id,
      title,
      img,
      short_description,
      content,
      published_at,
      author,
    },
  } = useRoute();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type=="tutorial"  && _id == $id  ][0]`, { id })
      .then((data) => {
        setTutorial(data);
      });
    const date = moment(published_at).fromNow();
    setCurrentDate(date);
  }, []);
  return (
    <SafeAreaView className="m-2">
      <View className="mt-3 flex flex-row  justify-between ">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View className="flex flex-row  items-center">
            <ChevronLeftIcon />
            <Text>back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <Text className="mt-5 font-bold text-xl">{title}</Text>
        <View className="my-2 flex flex-row">
          <Text className="font-bold">@{author} </Text>
          <Text>- {currentDate}</Text>
        </View>
        <Image
          source={{ uri: urlFor(img).url() }}
          className="h-56 my-10  w-full rounded-lg"
        />
        <Text>{content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorialDetailScreen;
