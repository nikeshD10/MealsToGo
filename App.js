import { StyleSheet, StatusBar, Text, View } from "react-native";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_400Bold,
} from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_400Bold,
  });

  // if (!oswaldLoaded || !latoLoaded) {
  //   return (
  //     <View style={{ justifyContent: "center", alignItems: "center" }}>
  //       <Text>Error</Text>
  //     </View>
  //   );
  // }
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
