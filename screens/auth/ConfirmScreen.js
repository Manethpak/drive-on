import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../../components/common/Input";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "../../components/common/Button";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { Auth } from "aws-amplify";

const ConfirmScreen = () => {
  const route = useRoute();
  const username = route.params?.username;
  const navigation = useNavigation();

  const [phone, setPhone] = useState(username || "+855");
  const [code, setCode] = useState("");

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Success", "code resent successfully");
      setTimer(60);
    } catch (err) {
      Alert.alert("Oops!", "error resending code: " + err);
    }
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(phone, code);
      navigation.replace("SignInScreen");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  const [timer, setTimer] = useState(60);
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevState) => prevState - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <SafeAreaView className="w-screen h-full mt-10 px-10 py-10">
      <TouchableOpacity className="mb-5" onPress={() => navigation.goBack()}>
        <ChevronLeftIcon color="gray" size={30} />
      </TouchableOpacity>

      <View>
        <Text className="text-4xl font-bold">Verify Code</Text>
        <Text className="text-sm text-gray-500 my-2">
          We have sent a code to your phone number. Please enter the code below
        </Text>

        <Input
          label="Code"
          keyboardType="numeric"
          value={code}
          onChangeText={(value) => {
            if (value.length <= 6) {
              setCode(value);
            }
          }}
        />
        <View>
          <Text className="text-sm text-gray-500 my-2 flex items-center justify-center">
            Didn't receive a code?{" "}
            <Text
              onPress={resendConfirmationCode}
              disabled={timer > 0}
              className={timer == 0 ? "text-blue-500" : "text-gray-500"}
            >
              Resend Code{" "}
            </Text>
            in {timer}s
          </Text>
        </View>

        <View className="mt-5">
          <Button onPress={confirmSignUp}>Confirm</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmScreen;
