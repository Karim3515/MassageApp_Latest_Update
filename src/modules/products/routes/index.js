import { Stack } from "../../../navigations";
import { ProductsScreen } from "../screens";

export const ProductsStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="productsStack"
  >
    <Stack.Screen name="productsStack" component={ProductsScreen} />
  </Stack.Navigator>
);
