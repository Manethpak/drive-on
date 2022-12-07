import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Product1 from "../../assets/product/product1.png";
import Product2 from "../../assets/product/product2.png";
import Product3 from "../../assets/product/product3.png";
import sanityClient, { urlFor } from "../../sanity";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";

const RecommandProductCard = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    sanityClient.fetch(`*[_type=="product" ]`).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {product.map(
        ({ _id, image, title, estimate_price, store, description }) => {
          return (
            <TouchableOpacity
              key={_id}
              onPress={() =>
                navigation.navigate("ProductDetail", {
                  _id,
                  image,
                  title,
                  estimate_price,
                  store,
                  description,
                })
              }
              className="w-[200px] h-42 m-1"
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
    </ScrollView>
  );
};

export default RecommandProductCard;
