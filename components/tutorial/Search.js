import { View, Text, TextInput } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

const Search = () => {
  return (
    <View className="my-3 px-4">
      <View className="flex-row space-x-2 flex-1 rounded-lg bg-gray-200 p-3">
        <MagnifyingGlassIcon color="gray" size={24} />
        <TextInput placeholder="Search something ....." />
      </View>
    </View>
  );
};

export default Search;
