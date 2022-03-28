import "react-native-gesture-handler";
import React, { useState, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppSplashLoader } from "./src/components";
import { AuthStack } from "./src/modules/auth";
import { HomeBottomTab } from "./src/modules/home/routes/bottomTab";
import { DrawerNavigator } from "./src/navigations/drawer";
import { navigationRef } from "./src/navigations/rootNavigator";
import AuthContext from "./src/context/AuthContext";

export default function App() {
  const [user, setUser] = useState(null);
  const [activeRoute, setActiveRoute] = useState("home");

  const trigger = useMemo(() => {
    return {
      updateUser: (user) => {
        setUser(user);
      },
      signout: () => {
        setUser(null);
      },
      setRoute: (r) => {
        setActiveRoute(r);
      },
    };
  });

  return (
    <AppSplashLoader>
      <AuthContext.Provider value={{ user, trigger, activeRoute }}>
        <NavigationContainer ref={navigationRef}>
          <DrawerNavigator />
          {/* <AuthStack /> */}
        </NavigationContainer>
      </AuthContext.Provider>
    </AppSplashLoader>
  );
}
