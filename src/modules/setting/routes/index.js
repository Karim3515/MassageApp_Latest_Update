import { Stack } from "../../../navigations";
import { SettingScreen } from "../screens";

export const SettingStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="settingStack"
  >
    <Stack.Screen name="settingStack" component={SettingScreen} />
  </Stack.Navigator>
);
