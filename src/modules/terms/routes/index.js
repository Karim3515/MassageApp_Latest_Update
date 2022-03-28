import { Stack } from "../../../navigations";
import { TermsScreen } from "../screens";

export const TermsStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="termsStack"
  >
    <Stack.Screen name="termsStack" component={TermsScreen} />
  </Stack.Navigator>
);
