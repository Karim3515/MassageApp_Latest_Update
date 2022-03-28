import { Stack } from "../../../navigations";
import { MembershipScreen } from "../screens";

export const MembershipStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="membershipStack"
  >
    <Stack.Screen name="membershipStack" component={MembershipScreen} />
  </Stack.Navigator>
);
