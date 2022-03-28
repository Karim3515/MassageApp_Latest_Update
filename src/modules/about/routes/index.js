import { Stack } from "../../../navigations";
import { AboutScreen } from "../screens";

export const AboutStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="aboutStack"
  >
    <Stack.Screen name="aboutStack" component={AboutScreen} />
  </Stack.Navigator>
);
