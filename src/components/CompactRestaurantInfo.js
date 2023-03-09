import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import CustomText from "../components/Text";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
`;

const CompactRestaurantInfo = ({ restaurant }) => {
  const imageLink = restaurant.photos[0];
  return (
    <Item>
      <CompactImage
        source={{
          uri: imageLink,
        }}
      />
      <CustomText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </CustomText>
    </Item>
  );
};

export default CompactRestaurantInfo;
