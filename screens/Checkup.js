import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  ClockIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import CheckupCard from "../components/checkup/CheckupCard";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import DateTimePicker from "@react-native-community/datetimepicker";
import { min } from "moment";
import { useRecoilState } from "recoil";
import { checkData } from "../atoms/checkupData";
const Checkup = () => {
  const [number, setNumber] = useState();
  const [items, setItems] = useState("");
  const [listData, setListData] = useRecoilState(checkData);

  const BottomSheetModalRef = useRef(null);
  const [title, setTitle] = useState([]);
  const snapPoints = ["90%"];
  const handlePresentModal = () => {
    BottomSheetModalRef.current?.present();
    console.log(BottomSheetModalRef.current?.present());
  };
  function addMonths(numOfMonths, date = new Date()) {
    date.setMonth(date.getMonth() + numOfMonths);

    return date;
  }
  const setData = () => {
    const date = new Date().toJSON().slice(0, 10);
    const estimate_date = addMonths(parseInt(number)).toJSON().slice(0, 10);
    const timeBetweenStartAndEnd = estimate_date - date;
    const timeBetweenStartAndToday = date - date;
    const item = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      percentage: 0,
      start_date: date,
      estimate_date: estimate_date,
    };
    setListData((oldList) => [...oldList, item]);
    setNumber("");
    setTitle("");
    console.log(listData);
  };
  console.log(listData);
  return (
    <BottomSheetModalProvider>
      <View className="mx-3">
        <View className=" my-5 flex flex-row justify-between items-center py-5">
          <Text className="font-bold text-xl">Check Your Vehicle</Text>
          <TouchableOpacity onPress={handlePresentModal}>
            <PlusIcon />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          vertical
          showsVerticalScrollIndicator={false}
        >
          {listData.map((item) => (
            <CheckupCard
              key={item.id}
              title={item.title}
              start_date={item.start_date}
              estimate_date={item.estimate_date}
            />
          ))}
        </ScrollView>
      </View>

      <BottomSheetModal
        className="absolute"
        ref={BottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
      >
        <KeyboardAvoidingView>
          <View className="absolute z-10 w-full">
            <Text className="text-center font-bold uppercase my-4 ">
              Create New
            </Text>
            <View>
              <View className="flex-row my-3 space-x-2 mx-5 flex-1 rounded-lg bg-gray-100 p-3">
                <PencilSquareIcon className="text-gray-200 mr-5 " />
                <TextInput
                  value={title}
                  placeholder="What is your title ? "
                  onChangeText={(title) => setTitle(title)}
                />
              </View>
              <View className="flex-row my-3 space-x-2 mx-5 flex-1 rounded-lg bg-gray-100 p-3">
                <ClockIcon className="text-gray-200 mr-5 " />
                <TextInput
                  keyboardType="numeric"
                  value={number}
                  placeholder="How many month ?"
                  onChangeText={(num) => setNumber(num)}
                  maxLength={2}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={setData}
              className="bg-blue-500 mx-5 py-3 rounded-lg mt-5"
            >
              <Text className="text-center font-bold text-white ">Done</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default Checkup;
