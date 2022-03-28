import { Stack } from "../../../navigations";
import { ProfileScreen } from "../screens";

export const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="profileStack"
  >
    <Stack.Screen name="profileStack" component={ProfileScreen} />
  </Stack.Navigator>
);
