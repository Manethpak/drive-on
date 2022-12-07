import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Tesla from "../assets/tesla.png";
import { ChevronLeftIcon } from "react-native-heroicons/solid";

const VehicleDetail = ({ navigation }) => {
  return (
    <SafeAreaView className="mt-5">
      <View className="flex flex-row justify-between items-center mt-2">
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <ChevronLeftIcon className="text-black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold ">Your Vehicle</Text>
        <View></View>
      </View>
      <View className="mt-12 items-center justify-center ">
        <Image source={Tesla} />
        <Text className="mb-2 font-bold ">Tesla Model 3</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <View className="h-2/3 bg-white rounded-t-2xl py-4 px-4">
          <Text className="font-bold text-lg">Vehicle info</Text>
          <View className="px-4 py-1">
            <Text> Model : Tesla Model 3</Text>
            <Text> Released Date : July 2017</Text>
            <Text> Vehicle Type : Electric Vehicle</Text>
            <Text> Manufacturer : Tesla.Inc</Text>
            <Text> Designer : Franz von holzhausen</Text>
          </View>

          <Text className="font-bold text-lg">Description</Text>
          <View className="px-4 py-1">
            <Text className="text-justify">
              The Tesla Model 3 is a compact executive sedan that is battery
              powered and produced by Tesla.[7] Limited production of the Model
              3 began in mid-2017, with the first production vehicle rolling off
              the assembly line on July 7, 2017.[8][9][10] The official launch
              and delivery of the first 30 cars took place on July 28.[11] The
              base Model 3 delivers an EPA-rated all-electric range of 272 miles
              (438 km) and the Long Range version delivers 358 miles (576
              km).[12] According to Tesla, the Model 3 carries full self-driving
              hardware, with periodic software updates adding functionality
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VehicleDetail;
