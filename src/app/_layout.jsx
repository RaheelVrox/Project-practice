import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import AnimateSpaceScreen from "./(days)/day4/AnimateSpaceScreen";

export default function RootLayout() {
  const [appReaty, setAppReaty] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const [fontloaded, fontError] = useFonts({
    "Causten-Black": require("../../assets/fonts/Causten-Black.otf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    if (fontloaded || fontError) {
      setAppReaty(true);
      SplashScreen.hideAsync();
      setTimeout(() => {
        setShowSplash(false);
      }, 3000);
    }
  }, [fontloaded, fontError]);

  if (!appReaty || showSplash) {
    console.log("animation");
    return <AnimateSpaceScreen />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#f9ede3" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: true, title: "Devemver" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
