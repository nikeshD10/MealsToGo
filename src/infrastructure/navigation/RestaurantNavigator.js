import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
