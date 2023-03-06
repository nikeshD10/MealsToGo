import { StatusBar, View, Text } from "react-native";
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
import { RestaurantContextProvider } from "./src/services/restaurants/restaurantContext";
import { LocationContextProvider } from "./src/services/restaurants/location/locationContext";
import Navigation from "./src/infrastructure/navigation";

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
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar backgroundColor="skyblue" />
    </>
  );
}
