import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import CustomText from "../components/Text";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
`;

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image
        source={{
          uri: restaurant.photos[0],
        }}
      />
      <CustomText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </CustomText>
    </Item>
  );
};

export default CompactRestaurantInfo;
