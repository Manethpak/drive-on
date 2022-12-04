import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./screens/onboarding/OnboardingScreen";
import { RecoilRoot } from "recoil";
import HomeScreen from "./screens/HomeScreen";
import { useEffect, useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import TabNavigator from "./screens/navigations/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen
              name="OnboardingScreen"
              component={OnBoardingScreen}
            />

            <Stack.Screen name="root" component={TabNavigator} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}
