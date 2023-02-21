import React from "react";
import CustomText from "../../../components/Text";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Spacer from "../../../components/Spacer";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  CustomIcon,
} from "./RestaurantInfoComponentStyle";

export const RestaurantInfoComponent = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <CustomText variant="label">{name}</CustomText>
        <Section>
          <Rating>
            {ratingArray.map((currelem, index) => (
              <Icon name="star" size={24} color="#f2d533" key={index} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <CustomText variant="error">CLOSED TEMPORARILY</CustomText>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && (
                <Icon name="silverware" size={24} color="#f2d533" />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <CustomIcon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
