import { Stack } from "../../../navigations";
import { PrivacyScreen } from "../screens";

export const PrivacyStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="privacyStack"
  >
    <Stack.Screen name="privacyStack" component={PrivacyScreen} />
  </Stack.Navigator>
);
