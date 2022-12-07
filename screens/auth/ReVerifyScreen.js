import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/common/Input";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "../../components/common/Button";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { Auth } from "aws-amplify";

const ConfirmScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [phone, setPhone] = useState("+855");

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(phone);
      Alert.alert("Success", "code resent successfully");
      navigation.navigate("ConfirmScreen", { username: phone });
    } catch (err) {
      Alert.alert("Oops!", "error resending code: " + err);
    }
  }

  return (
    <SafeAreaView className="w-screen h-full mt-10 px-10 py-10">
      <TouchableOpacity className="mb-5" onPress={() => navigation.goBack()}>
        <ChevronLeftIcon color="gray" size={30} />
      </TouchableOpacity>

      <View>
        <Text className="text-4xl font-bold">Verify Phone</Text>
        <Text className="text-sm text-gray-500 my-2">
          We have sent a code to your phone number. Please enter the code below
        </Text>

        <Input
          label="Phone Number"
          keyboardType="numeric"
          value={phone}
          onChangeText={(v) => {
            if (v[0] == "+") {
              setPhone(v);
            }
          }}
        />

        <View className="mt-5">
          <Button onPress={resendConfirmationCode}>Send Code</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmScreen;
