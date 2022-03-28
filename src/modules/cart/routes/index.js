import { Stack } from "../../../navigations";
import { CartScreen } from "../screens";

export const CartStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="cartStack"
  >
    <Stack.Screen name="cartStack" component={CartScreen} />
  </Stack.Navigator>
);
