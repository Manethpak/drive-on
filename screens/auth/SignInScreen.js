import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { Auth } from "aws-amplify";

export default function SignInScreen() {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const [phone, setPhone] = useState("+855");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    try {
      await Auth.signIn(phone, password);
      navigation.navigate("root");
    } catch (e) {
      Alert.alert("Oops", e.message || "Something went wrong");
    }
  };

  return (
    <SafeAreaView className="w-screen h-full justify-between mt-20 px-10 py-10">
      <View>
        <Text className="text-4xl font-bold">Sign In</Text>
        <Text className="text-xl font-semibold text-gray-500">
          Welcome back
        </Text>

        <Input
          label="Phone Number"
          value={phone}
          keyboardType="numeric"
          onChangeText={(v) => {
            if (v[0] == "+") {
              setPhone(v);
            }
          }}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => console.log("forgot password flow")}>
          <Text className="self-end mt-4 text-blue-500">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: height * 0.18 }}>
        <Button onPress={onSignIn}>Sign In</Button>
        <View className="flex flex-row justify-center items-center mt-5">
          <Text className="text-gray-500 text-md">Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            className="ml-1"
          >
            <Text className="text-blue-500 text-md underline">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
