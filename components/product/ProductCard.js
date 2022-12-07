import { View, Text, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

import sanityClient, { urlFor } from "../../sanity";

const ProductCard = ({
    id,
    title,
    img,
    retailer,
    price,
    navigation,
}) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type=="product"  && _id == $id  ][0]`, { id })
            .then((data) => {
                setProduct(data);
            });
    }, []);
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.push("ProductDetailScreen", {
                    id,
                    title,
                    img,
                    retailer,
                    price,
                    navigation,
                })
            }
            className="mx-4 mt-4 p-3 bg-gray-200 rounded-md h-41" 
        >
            <View className="flex flex-row">
                <View className="w-1/2 p-1 rounded-lg ">
                    <Image
                        source={{ uri: urlFor(img).url() }}
                        className="h-36 w-full rounded-lg"
                    />
                </View>
                <View className="w-1/2 p-1">
                    <Text className="font-bold ">{title}</Text>
                    <Text className="text-xs">{retailer}</Text>
                    <Text className="text-xs">{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;