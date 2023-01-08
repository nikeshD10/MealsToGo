import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family : ${(props) => props.theme.fonts.heading}
  font-size:${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family : ${(props) => props.theme.fonts.body}
  font-size : ${(props) => props.theme.fontSizes.caption}
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantInfoComponent = () => {
  const restaurant = {
    name: "Some Restaurant",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
  };
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
      />
      <Info>
        <Title>{restaurant.name}</Title>
        <Address>{restaurant.address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoComponent;

const styles = StyleSheet.create({});
