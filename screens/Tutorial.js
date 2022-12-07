import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../components/tutorial/Search";
import TutorialCard from "../components/tutorial/TutorialCard";
import sanityClient from "../sanity";
const Tutorial = ({ navigation }) => {
  const [tutorial, setTutorial] = useState([]);
  useEffect(() => {
    sanityClient.fetch(`*[_type=="tutorial" ]`).then((data) => {
      setTutorial(data);
    });
  }, []);
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
        {tutorial.map((data, index) => {
          return (
            <TutorialCard
              key={index}
              id={data._id}
              title={data.title}
              img={data.mainImage}
              short_description={data.short_description}
              navigation={navigation}
              content={data.content}
              author={data.author}
              published_at={data._createdAt}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tutorial;
