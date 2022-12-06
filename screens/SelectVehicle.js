import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import RNPickerSelect from "react-native-picker-select";

const SelectVehicle = ({ navigation }) => {
  return (
    <SafeAreaView className="w-screen h-full flex my-10 mx-5">
      <Text className="font-bold text-2xl">Select Your Vehicle</Text>
      <View className="bg-gray-200 px-2 py-3 rounded-md mt-10">
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[{ label: "Tesla Model 3", value: "football" }]}
        />
      </View>
      <View className="mt-96">
        <TouchableOpacity
          onPress={() => navigation.replace("root")}
          className="flex-1 h-[50px] rounded-md justify-center items-center bg-blue-500"
        >
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectVehicle;
