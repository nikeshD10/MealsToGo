import { View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components";
import Spacer from "../Spacer";
import CustomText from "../Text";
import CompactRestaurantInfo from "../CompactRestaurantInfo";

const FavouritesWrapper = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const FavouritesBar = ({ favourites }) => {
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <CustomText variant="caption">Favourites</CustomText>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          console.log("restaurant", restaurant.photos[0]);
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
