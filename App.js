import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./screens/onboarding/OnboardingScreen";
import { RecoilRoot, useRecoilState } from "recoil";
import SplashScreen from "./screens/SplashScreen";
import TabNavigator from "./screens/navigations/TabNavigator";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import VehicleDetail from "./screens/VehicleDetail";
import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import ReVerifyScreen from "./screens/auth/ReVerifyScreen";
import ConfirmScreen from "./screens/auth/ConfirmScreen";
import TutorialDetailScreen from "./screens/TutorialDetailScreen";
import SelectVehicle from "./screens/SelectVehicle";
import ProductScreen from "./screens/ProductScreen";
import ProductDetail from "./screens/ProductDetail";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

Amplify.configure(awsconfig);

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

            <Stack.Screen name="SelectVehicle" component={SelectVehicle} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="root" component={TabNavigator} />
            <Stack.Screen name="VehicleDetail" component={VehicleDetail} />
            <Stack.Screen
              name="TutorialDetailScreen"
              component={TutorialDetailScreen}
            />

            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ReVerifyScreen" component={ReVerifyScreen} />
            <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}
