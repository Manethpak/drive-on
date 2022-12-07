import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
const ProductDetail = () => {
  const [product, setProduct] = useState([]);

  const navigation = useNavigation();
  const {
    params: { _id, image, title, estimate_price, store, description },
  } = useRoute();
  useEffect(() => {
    sanityClient
      .fetch(`*[_type=="product"  && _id == $_id  ][0]`, { _id })
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <SafeAreaView className="my-10 mx-5">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex flex-row items-center "
      >
        <ChevronLeftIcon color="gray" size={24} />
        <Text className="px-2 font-bold text-lg py-4">{title}</Text>
      </TouchableOpacity>
      <View>
        <Image
          source={{ uri: urlFor(image).url() }}
          className="h-56 w-full rounded-lg"
        />
      </View>

      <View className="py-2">
        <Text className="font-bold text-lg">
          Esimate Price : {estimate_price} $
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 400,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text className="font-bold text-sm ">Descirption</Text>
          <Text className="text-gray-500 text-xs pt-2"> {description}</Text>
        </View>
        <View>
          <Text className="font-bold text-sm mt-5">Store</Text>
          <View className="flex flex-row justify-between items-center mt-5">
            <Text>{store["store_name"]}</Text>
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL(store["store_url"])}
            >
              View Store
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
