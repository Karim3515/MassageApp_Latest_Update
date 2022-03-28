import { Stack } from "../../../navigations";
import { FavouritiesScreen } from "../screens";

export const FavouritiesStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="favouritiesStack"
  >
    <Stack.Screen name="favouritiesStack" component={FavouritiesScreen} />
  </Stack.Navigator>
);
