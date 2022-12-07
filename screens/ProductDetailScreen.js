import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetailScreen = () => {
    const navigation = useNavigation();
    const {
        params: {
            id,
            title,
            img,
            retailer,
            price,
        },
    } = useRoute();
    return (
        <SafeAreaView className="m-2">
            <View className="mt-3 flex flex-row  justify-between ">
                <TouchableOpacity onPress={() => navigation.goBack()} className>
                    <View className="flex flex-row  items-center">
                        <ChevronLeftIcon />
                        <Text>back</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
                vertical
                showsVerticalScrollIndicator={false}
            >   
                <Image
                    source={{ uri: urlFor(img).url() }}
                    className="h-56 my-10  w-full rounded-lg"
                />
                <Text className="mt-5 font-bold text-xl">{title}</Text>
                <View className="my-2 flex flex-row">
                    <Text className="font-bold">$ {price} </Text>
                    <Text className="font-semi-bold">@{retailer} </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetailScreen;