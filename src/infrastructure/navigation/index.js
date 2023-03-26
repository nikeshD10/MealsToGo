import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./AccountNavigator";
import AppNavigator from "./AppNavigator";
import { AuthenticationContext } from "../../services/authentication/authenticationContext";

export default Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
