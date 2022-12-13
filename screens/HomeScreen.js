import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import VehicleCard from "../components/homeScreen/VehicleCard";
import CheckupCard from "../components/homeScreen/CheckupCard";
import RecommandProductCard from "../components/homeScreen/RecommandProductCard";
import { useRecoilValue } from "recoil";
import { checkData } from "../atoms/checkupData";
import { PlusCircleIcon, UserCircleIcon } from "react-native-heroicons/solid";
import { userData } from "../atoms/userData";

const HomeScreen = ({ navigation }) => {
  const data = useRecoilValue(checkData);
  const user = useRecoilValue(userData);

  return (
    <SafeAreaView className="mx-4 mt-10">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          className="flex flex-row justify-end items-center my-3"
        >
          <Text className="text-lg font-bold mr-2">
            Hi, {user?.attributes.preferred_username}
          </Text>
          <UserCircleIcon color="gray" size={40} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 0,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-row justify-between items-center">
          <Text className="text-2xl font-bold ">Your Vehicle </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SelectVehicle")}
          >
            <PlusCircleIcon color="gray" size={30} />
          </TouchableOpacity>
        </View>
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
