import { StyleSheet, StatusBar, Text, View } from "react-native";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme/index";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    if (oswaldLoaded && latoLoaded) {
      SplashScreen.hideAsync();
    }
  }, [oswaldLoaded, latoLoaded]);

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <StatusBar backgroundColor="skyblue" />
    </>
  );
}

const styles = StyleSheet.create({});
