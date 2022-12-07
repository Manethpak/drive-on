import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";
import Button from "../components/common/Button";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { userData } from "../atoms/userData";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useRecoilState(userData);

  const onSignOut = async () => {
    try {
      await Auth.signOut();
      navigation.replace("SplashScreen");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView className="w-screen h-full flex my-10 mx-5">
      <Text>Hello {user.attributes.preferred_username}</Text>
      <View>
        <TouchableOpacity
          onPress={onSignOut}
          className="justify-center items-center bg-red-500 py-3 rounded-lg mt-5"
        >
          <Text className="font-bold text-white">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
