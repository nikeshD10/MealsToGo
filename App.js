import { StatusBar, View, Text } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme/index";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

//  ---------------       For the fonts   ----------------------------------
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

//  -----------------    For the Contexts   --------------------------------
import { RestaurantContextProvider } from "./src/services/restaurants/restaurantContext";
import { LocationContextProvider } from "./src/services/restaurants/location/locationContext";
import { FavouriteContextProvider } from "./src/services/favourites/FavouriteContext";
import { AuthenticationContextProvider } from "./src/services/authentication/authenticationContext";
import Navigation from "./src/infrastructure/navigation/index";

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
        <AuthenticationContextProvider>
          <FavouriteContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouriteContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar backgroundColor="skyblue" />
    </>
  );
}
