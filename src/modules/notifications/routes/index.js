import { Stack } from "../../../navigations";
import { NotificationScreen } from "../screens";

export const NotificationStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="notificationStack"
  >
    <Stack.Screen name="notificationStack" component={NotificationScreen} />
  </Stack.Navigator>
);
