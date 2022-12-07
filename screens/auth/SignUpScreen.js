import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";

const SignUpScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "+855",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "value",
        message: "Passwords do not match",
      });
      return;
    }
    try {
      await Auth.signUp({
        username: data.phoneNumber,
        password: data.password,
        attributes: {
          preferred_username: data.username,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      navigation.navigate("ConfirmScreen", { username: data.phoneNumber });
    } catch (e) {
      Alert.alert("Oops", e.message || "Something went wrong");
    }
  };

  return (
    <SafeAreaView className="w-screen h-full justify-between mt-20 px-10 py-10">
      <View>
        <Text className="text-4xl font-bold">Sign Up</Text>

        <Controller
          control={control}
          rules={{
            required: "",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={(v) => {
                if (v[0] == "+") {
                  onChange(v);
                }
              }}
              value={value}
              label="Phone Number"
              keyboardType="numeric"
            />
          )}
          name="phoneNumber"
        />
        {errors.phoneNumber && (
          <Text className="text-red-500 text-sm">
            {errors.phoneNumber.message}
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Username must be at most 20 characters",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Username"
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text className="text-red-500 text-sm">
            {errors.username.message}
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must be at most 20 characters",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Password"
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text className="text-red-500 text-sm">
            {errors.password.message}
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: "Password is required",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Confirm Password"
              secureTextEntry
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </Text>
        )}
      </View>

      <View style={{ height: height * 0.22 }}>
        <Button onPress={handleSubmit(onSubmit)}>Sign Up</Button>
        <View className="flex flex-row justify-center items-center mt-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("ReVerifyScreen")}
            className="ml-2"
          >
            <Text className="text-blue-500 text-md underline">
              Need to verify account?
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-center items-center mt-4">
          <Text className="text-gray-500 text-md">
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            className="ml-2"
          >
            <Text className="text-blue-500 text-md underline">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
