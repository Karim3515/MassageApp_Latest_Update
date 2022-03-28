import { Stack } from "../../../navigations";
import {
  ForgetScreen,
  NewPasswordScreen,
  OtpScreen,
  SigninScreen,
  SignupScreen,
  WelcomeScreen,
} from "../screens";

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="welcome"
  >
    <Stack.Screen name="welcome" component={WelcomeScreen} />
    <Stack.Screen name="signin" component={SigninScreen} />
    <Stack.Screen name="signup" component={SignupScreen} />
    <Stack.Screen name="forget" component={ForgetScreen} />
    <Stack.Screen name="otp" component={OtpScreen} />
    <Stack.Screen name="newPassword" component={NewPasswordScreen} />
  </Stack.Navigator>
);
