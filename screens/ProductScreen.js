import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../components/tutorial/Search";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import sanityClient, { urlFor } from "../sanity";
import { useRecoilState } from "recoil";
import { productData } from "../atoms/productData";

const ProductScreen = ({ navigation }) => {
  const [product, setProduct] = useRecoilState(productData);
  useEffect(() => {
    sanityClient.fetch(`*[_type=="product" ]`).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <SafeAreaView className="w-screen h-full flex my-10 mx-5">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className=" flex flex-row items-center"
      >
        <ChevronLeftIcon color="gray" size={24} />
        <Text>Back</Text>
      </TouchableOpacity>
      <Search />
      <View className="flex flex-row-reverse justify-center items-center mx-2">
        {product.map(
          ({ _id, image, title, estimate_price, store, description }) => {
            return (
              <TouchableOpacity
                key={_id}
                onPress={() =>
                  navigation.push("ProductDetail", {
                    _id,
                    image,
                    title,
                    estimate_price,
                    store,
                    description,
                  })
                }
                className="w-1/2 h-36 bg-gray-200 m-1"
              >
                <View>
                  <Image
                    source={{ uri: urlFor(image).url() }}
                    className="h-36 w-full rounded-lg"
                  />
                </View>
                <Text className="mx-2">{title}</Text>
              </TouchableOpacity>
            );
          }
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
