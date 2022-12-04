import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { onBoardings } from "../../utils/onBoardingData";
import { useRecoilState, useRecoilValue } from "recoil";
import { offsetState, onBoardingState } from "../../atoms/onBoardingState";

const Footer = ({ height, width }) => {
  const currentSlideIndex = useRecoilValue(onBoardingState);
  const [offset, setOffset] = useRecoilState(offsetState);
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;

    setOffset(nextSlideIndex * width);

    console.log(ref);
  };
  return (
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
      <View className="my-[20px] mx-5">
        <View className="flex flex-row">
          <TouchableOpacity className="flex-1 h-[50px] rounded-md border-2 border-blue-500 justify-center items-center ">
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
      </View>
    </View>
  );
};

export default Footer;
