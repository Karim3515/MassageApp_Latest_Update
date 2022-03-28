import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from ".";
import { TabContent } from "./TabContent";
import { ProfileStack } from "../../profile";
import { SettingStack } from "../../setting";
import { NotificationStack } from "../../notifications";

const Tab = createBottomTabNavigator();

export const HomeBottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="homeTab"
        component={HomeStack}
        options={{
          title: "home",
        }}
      />
      <Tab.Screen
        name="notificationTab"
        component={NotificationStack}
        options={{
          title: "notification",
        }}
      />
      <Tab.Screen
        name="booknow"
        component={NotificationStack}
        options={{
          title: "booknow",
        }}
      />
      <Tab.Screen
        name="profileTab"
        component={ProfileStack}
        options={{
          title: "profile",
        }}
      />
      <Tab.Screen
        name="settingTab"
        component={SettingStack}
        options={{
          title: "setting",
        }}
      />
    </Tab.Navigator>
  );
};
