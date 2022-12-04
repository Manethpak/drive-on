import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Product1 from "../../assets/product/product1.png";
import Product2 from "../../assets/product/product2.png";
import Product3 from "../../assets/product/product3.png";

const RecommandProductCard = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex flex-row mt-4 " style={{ height: 300 }}>
        <View className="mr-3 flex flex-col">
          <Image
            classNamemt="mt-6 border border-blue-500"
            source={Product1}
            style={{ width: 200, height: 200 }}
          />
          <Text className="font-bold p-2 text-sm">Cleaning Fluid</Text>
        </View>
        <View className="mr-3 flex flex-col">
          <Image
            classNamemt="mt-6 border border-blue-500"
            source={Product2}
            style={{ width: 200, height: 200 }}
          />
          <Text className="font-bold p-1 text-sm">Cleaning Fluid</Text>
        </View>
        <View className="mr-3 flex flex-col">
          <Image
            classNamemt="mt-6 border border-blue-500"
            source={Product3}
            style={{ width: 200, height: 200 }}
          />
          <Text className="font-bold p-2 text-sm">Cleaning Fluid</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecommandProductCard;
