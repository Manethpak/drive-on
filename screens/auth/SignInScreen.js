import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { Auth } from "aws-amplify";
import { useRecoilState } from "recoil";
import { userData } from "../../atoms/userData";

export default function SignInScreen() {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const [phone, setPhone] = useState("+855");
  const [password, setPassword] = useState("");

  const [user, setUser] = useRecoilState(userData);

  const onSignIn = async () => {
    try {
      const authuser = await Auth.signIn(phone, password);
      navigation.navigate("root");
      setUser(authuser);
    } catch (e) {
      Alert.alert("Oops", e.message || "Something went wrong");
    }
  };

  return (
    <SafeAreaView
      style={{ height }}
      className="w-screen h-full justify-between px-10 py-10"
    >

        <View className="py-10 px-5">
          <View>
            <Text className="text-4xl font-bold">Sign In</Text>
            <Text className="text-xl font-semibold text-gray-500 pt-5">
              Welcome back
            </Text>
            <View className="mt-10">
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

              <TouchableOpacity
                onPress={() => console.log("forgot password flow")}
              >
                <Text className="self-end mt-4 text-blue-500">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ height: height * 0.18 }} className="mt-6">
            <Button onPress={onSignIn}>Sign In</Button>
            <View className="flex flex-row justify-center items-center mt-5">
              <Text className="text-gray-500 text-md">
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUpScreen")}
                className="ml-1"
              >
                <Text className="text-blue-500 text-md underline">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
}
