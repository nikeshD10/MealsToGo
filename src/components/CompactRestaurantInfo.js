import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import CustomText from "../components/Text";
import WebView from "react-native-webview";

const CompactImage = styled(Image)`
  width: 120px;
  height: 100px;
  border-radius: ${(props) => props.theme.sizes[0]};
`;
const CompactWebView = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: ${(props) => props.theme.sizes[0]};
`;
const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactRestaurantInfo = ({ restaurant, webView }) => {
  return (
    <Item>
      {webView ? (
        <CompactWebView source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage
          source={{
            uri: restaurant.photos[0],
          }}
        />
      )}
      <CustomText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </CustomText>
    </Item>
  );
};

export default CompactRestaurantInfo;
