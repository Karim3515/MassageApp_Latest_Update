import React, { useState, useCallback } from "react";
import AppLoading from "expo-app-loading";
import { useAssets } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AnimatedSplashScreen } from "./AnimatedSplashScreen";

const image = require("../../../assets/splash.png");

export const AppSplashLoader = ({ children }) => {
  SplashScreen.preventAutoHideAsync().catch(() => {});

  const [assets, error] = useAssets([image]);

  const [isSplashReady, setSplashReady] = useState(false);
  const startAsync = useCallback(
    async () =>
      await Font.loadAsync({
        Light: require("../../fonts/Light.ttf"),
        Regular: require("../../fonts/Regular.ttf"),
        SemiBold: require("../../fonts/SemiBold.ttf"),
        Bold: require("../../fonts/Bold.ttf"),
      }),
    []
  );

  const onFinish = useCallback(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
};
