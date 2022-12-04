import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useRef } from "react";
import { onBoardings } from "../../utils/onBoardingData";
import Slide from "../../components/onboarding/Slide";
import { useRecoilState, useRecoilValue } from "recoil";
import { offsetState, onBoardingState } from "../../atoms/onBoardingState";
import Footer from "../../components/onboarding/Footer";

const OnboardingScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [currentSlideIndex, setCurrentSlideIndex] =
    useRecoilState(onBoardingState);
  const ref = useRef(null);
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != 3) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
    }
  };
  const skip = () => {
    const offset = 2 * width;
    ref?.current?.scrollToOffset({ offset });
  };
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center w-full h-full">
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={onBoardings}
          contentContainerStyle={{ height: height * 0.7 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <Slide item={item} />}
        />
        {/* Footer */}
        <View
          style={{ height: height * 0.25, width }}
          className="justify-between py-10"
        >
          <View className="flex flex-row justify-center flex-1 ">
            {onBoardings.map((_, index) => (
              <View
                key={index}
                className={`h-1 w-[10px] mx-2 bg-gray-500 rounded-md ${
                  currentSlideIndex == index && "bg-blue-600 w-[20px]"
                }`}
              ></View>
            ))}
          </View>
          <View className="my-[20px] mx-5 mt-10">
            {currentSlideIndex == 2 ? (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.replace("Home")}
                  className="flex-1 h-[50px] rounded-md justify-center items-center bg-blue-500"
                >
                  <Text className="font-bold text-white">Get Started</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View className="flex flex-row ">
                <TouchableOpacity
                  onPress={skip}
                  className="flex-1 h-[50px] rounded-md border-2 border-blue-500 justify-center items-center "
                >
                  <Text className="font-bold ">Skip</Text>
                </TouchableOpacity>
                <View className="w-[15px]" />
                <TouchableOpacity
                  onPress={goNextSlide}
                  className="flex-1 h-[50px] rounded-md justify-center items-center bg-blue-500"
                >
                  <Text className="text-white font-bold">Next</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
