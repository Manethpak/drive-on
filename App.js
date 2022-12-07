import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./screens/onboarding/OnboardingScreen";
import { RecoilRoot } from "recoil";
import SplashScreen from "./screens/SplashScreen";
import TabNavigator from "./screens/navigations/TabNavigator";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import VehicleDetail from "./screens/VehicleDetail";
import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import ReVerifyScreen from "./screens/auth/ReVerifyScreen";
import ConfirmScreen from "./screens/auth/ConfirmScreen";

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

            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ReVerifyScreen" component={ReVerifyScreen} />
            <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />

            <Stack.Screen name="root" component={TabNavigator} />
            <Stack.Screen name="VehicleDetail" component={VehicleDetail} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}
