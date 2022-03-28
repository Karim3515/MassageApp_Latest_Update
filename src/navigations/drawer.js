import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeBottomTab } from "../modules/home";
import { DrawerContent } from "./drawerContent";
import { ProfileStack } from "../modules/profile";
import { SettingStack } from "../modules/setting";
import { NotificationStack } from "../modules/notifications";
import { ProductsStack } from "../modules/products";
import { CartStack } from "../modules/cart";
import { FavouritiesStack } from "../modules/favourities";
import { AboutStack } from "../modules/about";
import { PrivacyStack } from "../modules/privacy";
import { TermsStack } from "../modules/terms";
import { MembershipStack } from "../modules/membership";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"home"}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="home" component={HomeBottomTab} />
      <Drawer.Screen name="profile" component={ProfileStack} />
      <Drawer.Screen name="setting" component={SettingStack} />
      <Drawer.Screen name="notifications" component={NotificationStack} />
      <Drawer.Screen name="products" component={ProductsStack} />
      <Drawer.Screen name="cart" component={CartStack} />
      <Drawer.Screen name="favourities" component={FavouritiesStack} />
      <Drawer.Screen name="about" component={AboutStack} />
      <Drawer.Screen name="privacy" component={PrivacyStack} />
      <Drawer.Screen name="terms" component={TermsStack} />
      <Drawer.Screen name="membership" component={MembershipStack} />
    </Drawer.Navigator>
  );
};
