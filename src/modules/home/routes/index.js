import { Stack } from "../../../navigations";
import { HomeScreen } from "../screens";

export const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="homeStack"
  >
    <Stack.Screen name="homeStack" component={HomeScreen} />
  </Stack.Navigator>
);
