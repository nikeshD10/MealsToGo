import { View, Image } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";
import Text from "../../../components/Text";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Spacer from "../../../components/Spacer";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-family : ${(props) => props.theme.fonts.body}
  font-size : ${(props) => props.theme.fontSizes.caption}
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

const Rating = styled(View)`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const CustomIcon = styled(Image)`
  width: 15px;
  height: 15px;
`;

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
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((currelem, index) => (
              <Icon name="star" size={24} color="#f2d533" key={index} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && (
                <Open name="silverware" size={24} color="#f2d533" />
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
