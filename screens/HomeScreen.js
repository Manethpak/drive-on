import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import VehicleCard from "../components/homeScreen/VehicleCard";
import CheckupCard from "../components/homeScreen/CheckupCard";
import RecommandProductCard from "../components/homeScreen/RecommandProductCard";
import { useRecoilValue } from "recoil";
import { checkData } from "../atoms/checkupData";
import { ChevronRightIcon } from "react-native-heroicons/solid";
// import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  const data = useRecoilValue(checkData);
  return (
    <SafeAreaView className="mx-4 mt-10">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 0,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-2xl font-bold ">Your Vehicle </Text>
        <VehicleCard navigation={navigation} />
        <Text className="text-xl pt-6 font-bold ">Quick Checkup </Text>

        {data.length == 0 ? (
          <View
            className="flex flex-row bg-gray-200 justify-center items-center mt-2 "
            style={{ height: 170 }}
          >
            <Text className="font-bold">You don't have data yet</Text>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 5,
              paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {data.map((item) => (
              <CheckupCard
                key={item.id}
                title={item.title}
                start_date={item.start_date}
                estimate_date={item.estimate_date}
              />
            ))}
          </ScrollView>
        )}
        <View className=" mt-6 flex flex-row justify-between items-center">
          <Text className="text-xl  font-bold">Recommanded Product </Text>
          <TouchableOpacity onPress={() => navigation.push("ProductScreen")}>
            <Text className="font-bold text-blue-500">See more</Text>
          </TouchableOpacity>
        </View>
        <RecommandProductCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
