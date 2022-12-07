import { Animated, View, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getItem } from "../utils/asyncStorage";
import { userData } from "../atoms/userData";
import { useRecoilState } from "recoil";
import { Auth } from "aws-amplify";

const SplashScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const edges = useSafeAreaInsets();
  const startAnimation = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  const [user, setUser] = useRecoilState(userData);

  useEffect(() => {
    setTimeout(async () => {
      Animated.sequence([
        Animated.timing(startAnimation, {
          toValue: height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: 1.4,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          toValue: 1.45,
          useNativeDriver: true,
        }),
      ]).start();

      if (await getItem("@onboard")) {
        try {
          if (await Auth.currentAuthenticatedUser()) {
            navigation.replace("root");
          }
        } catch (e) {
          navigation.replace("SignInScreen");
        }
      } else {
        navigation.replace("OnboardingScreen");
      }
    }, 1500);
  }, []);

  useEffect(() => {
    const authUser = async () => {
      try {
        const res = await Auth.currentAuthenticatedUser();
        setUser(res);
      } catch (e) {
        console.log(e);
      }
    };
    authUser();
  }, []);

  return (
    <Animated.View
      className="absolute top-0 bottom-0 left-0 right-0"
      style={{ transform: [{ translateY: 0 }] }}
    >
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          // transform: [{ scale: scaleLogo }],
        }}
      >
        <Animated.Image
          source={Logo}
          style={{
            height: 100,
            width: 100,
            transform: [{ scale: scaleLogo }],
          }}
        />
        <View className="mt-10"></View>
        <Animated.Text
          className="text-3xl my-2 font-bold"
          style={{ transform: [{ scale: scaleTitle }] }}
        >
          Drive-On
        </Animated.Text>
        <Animated.Text
          className="text-gray-500 "
          style={{ transform: [{ scale: scaleTitle }] }}
        >
          Make your life easier
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;
